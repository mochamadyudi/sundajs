export const isUndefined = (obj: any): obj is undefined => typeof obj  === 'undefined';
export const isObject = (val: any): val is object | undefined => typeof val === 'object';
export const isBoolean = (val: any): val is boolean | undefined => typeof val === 'boolean';
export const isNumber = (val: any): val is number | undefined => typeof val === 'number';
export const isString = (val: any): val is string | undefined => typeof val === 'string';
export const isEmpty = (val: any): boolean => !(Array.isArray(val) && val.length > 0);
export const isFunction = (val: any): val is Function | undefined => typeof val === 'function';
export const isSymbol = (val: any): val is Symbol | undefined => typeof val === 'symbol';