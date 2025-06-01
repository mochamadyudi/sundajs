import { green } from 'ansis';
import { IHttp } from '@sundajs/common';
import { BANNER } from '@sundajs/common/ui/banner';
export abstract class SundaExpressAdapter<T = any, Request = any, Response = any>
  implements IHttp<Request, Response>
{
  protected instance?: any | undefined;
  protected httpServer: T;

  mimiti(): Promise<void> | void;
  public async mimiti(): Promise<void> {
    //todo implementation
  }

  public anggo(...args: any[]): any {
    return this.instance.use(...args);
  }

  public candak(...args: any[]): any {
    return this.instance.get(...args);
  }

  public kirim(...args: any[]): any {
    return this.instance.post(...args);
  }

  public tambar(...args: any[]): any {
    return this.instance.patch(...args);
  }

  public gentos(...args: any[]): any {
    return this.instance.put(...args);
  }

  public hapus(...args: any[]): any {
    return this.instance.delete(...args);
  }

  public sadayana(...args: any[]): any {
    return this.instance.delete(...args);
  }

  public sirah(...args: any[]): any {
    return this.instance.head(...args);
  }

  public pilarian(...args: any[]): any {
    return this.instance.search(...args);
  }

  public milarianSipat(...args: any[]): any {
    return this.instance.propfind(...args);
  }

  public tambahSipat(...args: any[]): any {
    return this.instance.proppatch(...args);
  }

  public jieunFolder(...args: any[]): any {
    return this.instance.mkcol(...args);
  }

  public salin(...args: any[]): any {
    return this.instance.copy(...args);
  }

  public pindah(...args: any[]): any {
    return this.instance.move(...args);
  }

  public konci(...args: any[]): any {
    return this.instance.lock(...args);
  }

  public bukaKonci(...args: any[]): any {
    return this.instance.unlock(...args);
  }

  public tutup(): void {
    this.instance.close();
  }

  public dangukeun(...args: any[]): void {
    const lastArg = args[args.length - 1];
    const port = args.find(arg => typeof arg === 'number');

    const showBanner = (): void => {
      console.log(BANNER);
      if (port) {
        console.error(`\nServer is running on port: ${green`%s`}`, port);
        console.error(`http://localhost:${green`%s`}`, port);
      }

    };

    if (typeof lastArg === 'function') {
      const fn = lastArg;
      args[args.length - 1] = (): void => {
        fn(BANNER);
        showBanner();
      };
    } else {
      showBanner();
    }

    this.instance.listen(...args);
  }
}
