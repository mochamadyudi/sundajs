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
 * @param {PamundutMethod} metadata
 * @constructor
 */
export const PamundutMapping = (metadata: PamundutMappingMetadata = candakAwalanMetadata()): MethodDecorator => {
  const jalurMetadata = metadata[JALUR_METADATA] ?? null;
  const jalur = jalurMetadata && jalurMetadata.length ? jalurMetadata : '/';
  const method = metadata[METHOD_METADATA] || PamundutMethod.Candak;

  return (target: object, konci: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    Reflect.defineMetadata(JALUR_METADATA, jalur, descriptor.value);
    Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
    return descriptor;
  }
}

/**
 * @name ngieunMappingDecorator
 * @description - ngadefinisikeun heula sateu acan ngieun pamundut
 * @param method
 */
const ngieunMappingDecorator = (method: PamundutMethod) => {
  return (jalur?: string | string[]): MethodDecorator => {
    const metadata = {
      [JALUR_METADATA]: jalur,
      [METHOD_METADATA]: method
    } as PamundutMappingMetadata;
    return PamundutMapping(metadata);
  }
};

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