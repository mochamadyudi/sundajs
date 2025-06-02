import 'reflect-metadata';
import { EcosystemEnum, IHttp, PamundutMethod, SundaApplicationOptions, Tipe } from '@sundajs/common';
import {
  ECOSYSTEM_OPTIONS,
  JALUR_METADATA,
  METHOD_METADATA,
  MODULE_METADATA,
  PANYADIA_METADATA,
  PARAM_TYPES_METADATA, TYPE_WATERMARK,
  VERSI_METADATA,
  WEWENGKON_PILIHAN_METADATA,
} from '@sundajs/common/constants';

import { ISundaFactory } from './interfaces';
import { loadAdapter } from './helpers';

export class SundaFactoryStatic implements ISundaFactory {
  public async create<T = IHttp>(
    module: any,
    options: SundaApplicationOptions
  ): Promise<T> {
    const app = await this.getEcosystem<T>(module, options?.ecosystem);

    this.moduleMap<T>(module, app);
    this.providerMap<T>(module, app);

    await this.controllerMap<T>(module, app);
    return app;
  }

  private async getEcosystem<T = any>(module: any, ecosystem?: EcosystemEnum): Promise<T> {
    Reflect.defineMetadata(ECOSYSTEM_OPTIONS, ecosystem, module);
    const { SundaExpress } = loadAdapter('@sundajs/ecosystem-express', () =>
      require('@sundajs/ecosystem-express')
    );
    return new SundaExpress() as T;
  }

  private moduleMap<T = any>(module: any, app: T): void{
    // const modules = Reflect.getMetadata(MODULE_METADATA)
  }

  private providerMap<T = any>(module: any, app: T): void{
    const providers =  Reflect.getMetadata(MODULE_METADATA.PROVIDERS, module) ?? [];
    console.log({ providers, module });
  }

  private async controllerMap<T = IHttp>(module: any, app: T): Promise<void>{
    const controllers = Reflect.getMetadata(MODULE_METADATA.CONTROLLER, module) ?? [];
    if(Array.isArray(controllers)) {
      controllers.forEach(controller => {
        const providers = Reflect.getMetadata(PANYADIA_METADATA, controller);
        const version = Reflect.getMetadata(VERSI_METADATA, controller);
        const scopeOptions = Reflect.getMetadata(WEWENGKON_PILIHAN_METADATA, controller);
        const type = Reflect.getMetadata(TYPE_WATERMARK, controller);
        const instance = this.resolveDependencies(controller);
        const path = Reflect.getMetadata(JALUR_METADATA, controller);
        const prototype = controller.prototype;

        const methodNames = Object.getOwnPropertyNames(prototype)
          .filter((method)=> method !== 'constructor' && typeof prototype[method] === 'function');

        methodNames.forEach(methodName => {
          const handler = prototype[methodName];
          const bindHandler = prototype[methodName].bind(instance);

          const routePath = Reflect.getMetadata(JALUR_METADATA, handler);
          const method = Reflect.getMetadata(METHOD_METADATA, handler);

          if ( typeof method !== 'undefined' && typeof PamundutMethod[method] !== 'undefined' ) {
            const _method = PamundutMethod[method].toString().toLowerCase();
            let _fullPath: string[] = [];
            if( typeof type !== 'undefined' && typeof type === 'string' && type.length){
              _fullPath.push('/'+type)
            }
            if(typeof ( version ) !== 'undefined' ) {
              _fullPath.push('/'+version)
            }

            _fullPath.push(path.startsWith('/') ? path : '/' + path);
            _fullPath.push(routePath.startsWith('/') ? routePath : '/' + routePath);
            if(typeof(app[_method]) !== 'undefined' && typeof(app[_method]) === 'function') {
              app[_method](_fullPath.join(''), bindHandler)
            }
          }
        })
      })
    }
  }

  private async methodMap(): Promise<any>{}

  private resolveDependencies(ControllerClass: any | Tipe): Tipe |any {
    const selfParam: any[] = Reflect.getMetadata(PARAM_TYPES_METADATA, ControllerClass);
    if(typeof selfParam !== 'undefined') {
      const dependency = selfParam.map(dep => new dep());
      return new ControllerClass(...dependency)
    }
    return new ControllerClass();
  }
}


export const SundaFactory = new SundaFactoryStatic();
