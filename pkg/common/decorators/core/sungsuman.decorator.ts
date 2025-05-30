import { PilihanWewengkon } from '../../interfaces';
import { SUNGSUMAN_WATERMARK } from '../../constants';

export type SungsumanPilihan = PilihanWewengkon;

export function Sungsuman(): ClassDecorator;
export function Sungsuman(pilihan?: SungsumanPilihan): ClassDecorator {
  return (target: object) => {
    Reflect.defineMetadata(SUNGSUMAN_WATERMARK, true, target);
  }
}