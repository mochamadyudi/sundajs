import { SundaApplicationOptions } from '@sundajs/common';

export interface ISundaFactory {
  create<T = any>(module: any, options: SundaApplicationOptions): Promise<T>;
}