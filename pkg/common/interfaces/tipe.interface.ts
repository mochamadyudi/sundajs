export interface Tipe<T = any> extends Function {
  new (...args: any[]): T;
}