/*
 * Copyright (c) 2025. Mochamad Yudi.
 * Email: mochamadyudi@gmail.com
 * GitHub: https://github.com/mochamadyudi
 * LinkedIn: https://linkedin.com/in/mochamadyudi
 *
 */

import { ModuleMetadata } from '../interfaces/modules';
import { MODULE_METADATA } from '../constants';

export const INVALID_MODULE_CONFIG_MESSAGE = (
  text: TemplateStringsArray,
  property: string,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => `Invalid property '${property}' passed into the @Modul() decorator.`;

const konciMetadata = [
  MODULE_METADATA.IMPORT,
  MODULE_METADATA.EXPORTS,
  MODULE_METADATA.PROVIDERS,
  MODULE_METADATA.CONTROLLER,
];

export function Modul(metadata: ModuleMetadata): ClassDecorator {
  const konci = Object.keys(metadata);
  validasiKonciModul(konci);
  return (target: object | Function): void => {
    Reflect.defineMetadata(MODULE_METADATA.DEFAULT, metadata, target);
    for (const meta in metadata) {
      if(Object.hasOwnProperty.call(metadata, meta)){
        Reflect.defineMetadata(meta, (metadata as any)[meta], target);
      }
    }
  }
}

export function validasiKonciModul(_konci: string[]) : any{
  const validasiKonci = (konci) : boolean | Error => {
    if(konciMetadata.includes(konci)){
      return true;
    }
    throw new Error(INVALID_MODULE_CONFIG_MESSAGE`${konci}`);
  }
  _konci.forEach((konci) => validasiKonci(konci));
}