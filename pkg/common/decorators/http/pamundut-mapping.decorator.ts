import 'reflect-metadata';
import { PamundutMethod } from '../../enums';
import { JALUR_METADATA, METHOD_METADATA } from '../../constants';

export interface PamundutMappingMetadata {
  jalur?: string | string[];
  method?: PamundutMethod;
}

/**
 * @name candakAwalanMetadata
 * @description ieu ngieun heula kanggo awalan metadata mun teu aya isi na.
 */
const candakAwalanMetadata = (): PamundutMappingMetadata => {
  return {
    [JALUR_METADATA]: '/',
    [METHOD_METADATA]: PamundutMethod.Candak
  }
}

/**
 * @name PamundutMapping
 * @description - mapping kanggo ngadefinisikeun ngieun pamundut
 * @param {RequestMethod} metadata
 * @constructor
 */
export const PamundutMapping = (metadata: PamundutMappingMetadata = candakAwalanMetadata()): MethodDecorator => {
  const pathMetadata = metadata[JALUR_METADATA];
  const path = pathMetadata && pathMetadata.length ? pathMetadata: '/';
  const requestMethod = metadata[METHOD_METADATA] || PamundutMethod.Candak;

  return ( target: object, key: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    Reflect.defineMetadata(JALUR_METADATA, path, descriptor.value);
    Reflect.defineMetadata(METHOD_METADATA, requestMethod, descriptor.value);
    return descriptor;
  }
}

/**
 * @name ngieunMappingDecorator
 * @description - ngadefinisikeun heula sateu acan ngieun pamundut
 * @param method
 */
const ngieunMappingDecorator = (method: PamundutMethod) => {
  return (path?: string | string[]): MethodDecorator => {
    const metadata = {
      [JALUR_METADATA]: path,
      [METHOD_METADATA]: method
    } as PamundutMappingMetadata;

    return PamundutMapping(metadata);
  }
};


// export const Cokot = ngieunMappingDecorator(RequestMethod.GET);
// export const Candak = ngieunMappingDecorator(RequestMethod.GET);
// export const Kirim = ngieunMappingDecorator(RequestMethod.POST);
// export const Gentos = ngieunMappingDecorator(RequestMethod.PUT);
// export const Hapus = ngieunMappingDecorator(RequestMethod.DELETE);
// export const Tambar = ngieunMappingDecorator(RequestMethod.PATCH);
// export const Sadayana = ngieunMappingDecorator(RequestMethod.ALL);
// export const Pilihan = ngieunMappingDecorator(RequestMethod.HEAD);
// export const Sirah = ngieunMappingDecorator(RequestMethod.SEARCH);
// export const Pilarian = ngieunMappingDecorator(RequestMethod.OPTIONS);
// export const MilarianSipat = ngieunMappingDecorator(RequestMethod.PROPFIND);
// export const TambahSipat = ngieunMappingDecorator(RequestMethod.PROPPATCH);
// export const JieunFolder = ngieunMappingDecorator(RequestMethod.MKCOL);
// export const Salin = ngieunMappingDecorator(RequestMethod.COPY);
// export const Konci  = ngieunMappingDecorator(RequestMethod.MOVE);
// export const BukaKonci = ngieunMappingDecorator(RequestMethod.LOCK);
// export const Pindah = ngieunMappingDecorator(RequestMethod.UNLOCK);

export const Candak = ngieunMappingDecorator(PamundutMethod.Candak);
export const Kirim = ngieunMappingDecorator(PamundutMethod.Kirim);
export const Gentos = ngieunMappingDecorator(PamundutMethod.Gentos);
export const Hapus = ngieunMappingDecorator(PamundutMethod.Hapus);
export const Tambar = ngieunMappingDecorator(PamundutMethod.Tambar);
export const Sadayana = ngieunMappingDecorator(PamundutMethod.Sadayana);
export const Pilihan = ngieunMappingDecorator(PamundutMethod.Pilihan);
export const Sirah = ngieunMappingDecorator(PamundutMethod.Sirah);
export const Pilarian = ngieunMappingDecorator(PamundutMethod.Pilarian);
export const MilarianSipat = ngieunMappingDecorator(PamundutMethod.MilarianSipat);
export const TambahSipat = ngieunMappingDecorator(PamundutMethod.TambahSipat);
export const JieunFolder = ngieunMappingDecorator(PamundutMethod.JieunFolder);
export const Salin = ngieunMappingDecorator(PamundutMethod.Salin);
export const Konci  = ngieunMappingDecorator(PamundutMethod.Konci);
export const BukaKonci = ngieunMappingDecorator(PamundutMethod.BukaKonci);
export const Pindah = ngieunMappingDecorator(PamundutMethod.Pindah);