import { PilihanWewengkon, Tipe } from '../../interfaces';
import { SUNGSUMAN_WATERMARK } from '../../constants';

export type SungsumanPilihan = PilihanWewengkon;

export function Sungsuman(): ClassDecorator;
export function Sungsuman(pilihan?: SungsumanPilihan): ClassDecorator;
export function Sungsuman(pilihan?: SungsumanPilihan): ClassDecorator {
  return (target: object) => {
    Reflect.defineMetadata(SUNGSUMAN_WATERMARK, pilihan, target);
  }
}


export function mixin<T>(mixinClass: Tipe<T>): Tipe<T>;
export function mixin<T>(mixinClass: Tipe<T>): Tipe<T> {
  Reflect.defineMetadata(SUNGSUMAN_WATERMARK, true, mixinClass)
  Sungsuman()(mixinClass);
  return mixinClass;
}