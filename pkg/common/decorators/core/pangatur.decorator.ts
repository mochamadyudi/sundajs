import { VersiPilihan, PilihanWewengkon } from '../../interfaces';
import { isString, isUndefined } from '../../utils';
import {
  JALUR_METADATA,
  PANGATUR_WATERMARK,
  PANYADIA_METADATA, TYPE_WATERMARK,
  VERSI_METADATA, WEWENGKON_PILIHAN_METADATA,
} from '../../constants';

/**
 * Pilihan konfigurasi pikeun decorator @Pangatur.
 *
 * Interface ieu ngawangun pilihan tambahan (beside awalan jalur)
 * pikeun nguatur controller/module di SundaJS, kalebet wewengkon (scope)
 * jeung versi, ogé panyadia (providers) anu khusus.
 *
 * @extends PilihanWewengkon
 *   - Ngandung pilihan `wewengkon` (scope) jeung `tahanLila` (timeout).
 * @extends VersiPilihan
 *   - Ngandung pilihan `versi` (array string atawa string) pikeun versioning endpoint.
 *
 * @property {string | string[]} [jalur]
 *   Awalan jalur (path prefix) pikeun kabeh route di controller ieu.
 *   Conto:
 *   - `"/users"`
 *   - `["/v1/users", "/v2/users"]`
 *
 * @property {string | RegExp | Array<string | RegExp>} [panyadia]
 *   Filter panyadia (providers) nu diijinkeun di-inject kana controller ieu.
 *   Bisa diatur ku:
 *   - `string` (ngaran provider persis),
 *   - `RegExp` (pattern matching kana nama provider),
 *   - Atawa array kombinasi `string` jeung `RegExp`.
 *
 * @property {'web' | 'api'} [tipe]
 *   Tipe endpoint nu di-handle ku controller ieu:
 *   - `"web"`  → pikeun rute sisi client/browser (controlling view/page),
 *   - `"api"`  → pikeun rute RESTful/JSON-based API.
 */
export interface PangaturPilihan extends PilihanWewengkon, VersiPilihan {
  jalur?: string | string[];
  panyadia?: string | RegExp | Array<string | RegExp>;
  tipe?: 'web' | 'api'
}

/**
 * Menandai class sebagai pangatur (controller) tanpa awalan jalur.
 * Jalur default nu dipaké nyaéta `'/'`.
 *
 * @example
 * ```ts
 * @Pangatur()
 * class UserController {}
 * ```
 *
 * @returns ClassDecorator
 */
export function Pangatur(): ClassDecorator;

/**
 * Menandai class salaku pangatur jeung nyetél awalan jalur.
 * Bisa nganggo string tunggal atawa array jalur.
 *
 * @param awalan Awalan jalur endpoint (contoh: '/user' atawa ['/admin', '/super-admin'])
 *
 * @example
 * ```ts
 * @Pangatur('/user')
 * class UserController {}
 *
 * @Pangatur(['/admin', '/super-admin'])
 * class AdminController {}
 * ```
 *
 * @returns ClassDecorator
 */
export function Pangatur(awalan: string | string[]): ClassDecorator;
/**
 * Menandai class salaku pangatur jeung konfigurasi lengkep.
 * Ngidinan nyetél jalur, panyadia (hostname matcher), versi API, sarta wewengkon.
 *
 * @param pilihan Object konfigurasi `PangaturPilihan`
 *
 * @example
 * ```ts
 * @Pangatur('/user')
 * class UserController {}
 *
 * @Pangatur(['/admin', '/super-admin'])
 * class AdminController {}
 * ```
 *
 * @example
 * ```ts
 * @Pangatur({
 *   jalur: '/api',
 *   panyadia: /.*\.example\.com$/,
 *   versi: ['v1', 'v2'],
 *   wewengkon: 'global',
 *   tahanLila: true,
 *   tipe: 'api'
 * })
 * class ApiController {}
 * ```
 *
 * @returns ClassDecorator
 */
export function Pangatur(pilihan: PangaturPilihan): ClassDecorator;

/**
 * Menandai class salaku pangatur jeung konfigurasi lengkep.
 * Ngidinan nyetél jalur, panyadia (hostname matcher), versi API, sarta wewengkon.
 *
 * @param awalanAtauPilihan Object konfigurasi `PangaturPilihan`
 *
 * @example
 * ```ts
 * @Pangatur({
 *   jalur: '/api',
 *   panyadia: /.*\.example\.com$/,
 *   versi: ['v1', 'v2'],
 *   wewengkon: 'global',
 *   tahanLila: true,
 *   tipe: 'api'
 * })
 * class ApiController {}
 * ```
 *
 * @returns ClassDecorator
 */
export function Pangatur(awalanAtauPilihan?: string | string[] | PangaturPilihan): ClassDecorator {
  const awalanJalur = '/';
  const [
    jalur,
    panyadia,
    wewengkonPilihan,
    versiPilihan,
    type,
  ] = isUndefined(awalanAtauPilihan) ? [
    awalanJalur,
    undefined,
    undefined,
    undefined,
    undefined
  ]: isString(awalanAtauPilihan) || Array.isArray(awalanAtauPilihan) ?
    [awalanAtauPilihan, undefined, undefined, undefined, undefined]
    : [
      awalanAtauPilihan?.jalur ?? awalanJalur,
      awalanAtauPilihan.panyadia,
      {
        wewengkon: awalanAtauPilihan.wewengkon,
        tahanLila: awalanAtauPilihan.tahanLila,
      },
      Array.isArray(awalanAtauPilihan.versi) ?
        Array.from(new Set(awalanAtauPilihan.versi))
        :
        awalanAtauPilihan.versi,
      awalanAtauPilihan?.tipe ?? 'api'
    ];

  return (target: object) => {
    Reflect.defineMetadata(PANGATUR_WATERMARK, true, target);
    Reflect.defineMetadata(JALUR_METADATA, jalur, target);
    Reflect.defineMetadata(PANYADIA_METADATA, panyadia, target);
    Reflect.defineMetadata(VERSI_METADATA, versiPilihan, target);
    Reflect.defineMetadata(TYPE_WATERMARK, type, target);
    Reflect.defineMetadata(WEWENGKON_PILIHAN_METADATA, wewengkonPilihan, target);
  }
}