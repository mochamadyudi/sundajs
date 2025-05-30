import { VersiPilihan, PilihanWewengkon } from '../../interfaces';
import { isString, isUndefined } from '../../utils';
import {
  JALUR_METADATA,
  PANGATUR_WATERMARK,
  PANYADIA_METADATA,
  VERSI_METADATA, WEWENGKON_PILIHAN_METADATA,
} from '../../constants';


export interface PangaturPilihan extends PilihanWewengkon, VersiPilihan {
  jalur?: string | string[];
  panyadia?: string | RegExp | Array<string | RegExp>;
  tipe?: 'web' | 'api'
}

export function Pangatur(): ClassDecorator;
export function Pangatur(awalan: string | string[]): ClassDecorator;
export function Pangatur(pilihan: PangaturPilihan): ClassDecorator;
export function Pangatur(awalanAtauPilihan?: string | string[] | PangaturPilihan): ClassDecorator {
  const awalanJalur = '/';
  const [
    jalur,
    panyadia,
    wewengkonPilihan,
    versiPilihan
  ] = isUndefined(awalanAtauPilihan) ? [
    awalanJalur,
    undefined,
    undefined,
    undefined
  ]: isString(awalanAtauPilihan) || Array.isArray(awalanAtauPilihan) ?
    [awalanJalur, undefined, undefined, undefined]
    : [
      awalanAtauPilihan.jalur ?? awalanJalur,
      awalanAtauPilihan.panyadia,
      {
        wewengkon: awalanAtauPilihan.wewengkon,
        tahanLila: awalanAtauPilihan.tahanLila,
      },
      Array.isArray(awalanAtauPilihan.versi) ?
        Array.from(new Set(awalanAtauPilihan.versi))
        :
        awalanAtauPilihan.versi
    ];

  return (target: object) => {
    Reflect.defineMetadata(PANGATUR_WATERMARK, true, target);
    Reflect.defineMetadata(JALUR_METADATA, jalur, target);
    Reflect.defineMetadata(PANYADIA_METADATA, panyadia, target);
    Reflect.defineMetadata(VERSI_METADATA, versiPilihan, target);
    Reflect.defineMetadata(WEWENGKON_PILIHAN_METADATA, wewengkonPilihan, target);
  }
}