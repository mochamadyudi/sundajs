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

/**
 * @name Candak
 * @description Mapping decorator kanggo method HTTP "Candak" (GET)
 */
export const Candak = ngieunMappingDecorator(PamundutMethod.Candak);
/**
 * @name Kirim
 * @description Mapping decorator kanggo method HTTP "Kirim" (POST)
 */
export const Kirim = ngieunMappingDecorator(PamundutMethod.Kirim);

/**
 * @name Gentos
 * @description Mapping decorator kanggo method HTTP "Gentos" (PUT)
 */
export const Gentos = ngieunMappingDecorator(PamundutMethod.Gentos);

/**
 * @name Hapus
 * @description Mapping decorator kanggo method HTTP "Hapus" (DELETE)
 */
export const Hapus = ngieunMappingDecorator(PamundutMethod.Hapus);

/**
 * @name Tambar
 * @description Mapping decorator kanggo method HTTP "Tambar" (PATCH)
 */
export const Tambar = ngieunMappingDecorator(PamundutMethod.Tambar);

/**
 * @name Sadayana
 * @description Mapping decorator kanggo method HTTP "Sadayana" (ALL)
 */
export const Sadayana = ngieunMappingDecorator(PamundutMethod.Sadayana);

/**
 * @name Pilihan
 * @description Mapping decorator kanggo method HTTP "Pilihan" (OPTIONS)
 */
export const Pilihan = ngieunMappingDecorator(PamundutMethod.Pilihan);

/**
 * @name Sirah
 * @description Mapping decorator kanggo method HTTP "Sirah" (HEAD)
 */
export const Sirah = ngieunMappingDecorator(PamundutMethod.Sirah);

/**
 * @name Pilarian
 * @description Mapping decorator kanggo method HTTP "Pilarian" (SEARCH)
 */
export const Pilarian = ngieunMappingDecorator(PamundutMethod.Pilarian);

/**
 * @name MilarianSipat
 * @description Mapping decorator kanggo method HTTP "MilarianSipat" (PROPFIND)
 */
export const MilarianSipat = ngieunMappingDecorator(PamundutMethod.MilarianSipat);

/**
 * @name TambahSipat
 * @description Mapping decorator kanggo method HTTP "TambahSipat" (PROPPATCH)
 */
export const TambahSipat = ngieunMappingDecorator(PamundutMethod.TambahSipat);

/**
 * @name JieunFolder
 * @description Mapping decorator kanggo method HTTP "JieunFolder" (MKCOL)
 */
export const JieunFolder = ngieunMappingDecorator(PamundutMethod.JieunFolder);

/**
 * @name Salin
 * @description Mapping decorator kanggo method HTTP "Salin" (COPY)
 */
export const Salin = ngieunMappingDecorator(PamundutMethod.Salin);

/**
 * @name Konci
 * @description Mapping decorator kanggo method HTTP "Konci" (LOCK)
 */
export const Konci  = ngieunMappingDecorator(PamundutMethod.Konci);

/**
 * @name BukaKonci
 * @description Mapping decorator kanggo method HTTP "BukaKonci" (UNLOCK)
 */
export const BukaKonci = ngieunMappingDecorator(PamundutMethod.BukaKonci);

/**
 * @name Pindah
 * @description Mapping decorator kanggo method HTTP "Pindah" (MOVE)
 */
export const Pindah = ngieunMappingDecorator(PamundutMethod.Pindah);