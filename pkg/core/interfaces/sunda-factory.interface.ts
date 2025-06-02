import { SundaApplicationOptions } from '@sundajs/common';
import { Testing } from '@sundajs/common';

export interface ISundaFactory {
  create<T = any>(module: any, options: SundaApplicationOptions): Promise<T>;
  microService<T = any>(provider: any): any;
}