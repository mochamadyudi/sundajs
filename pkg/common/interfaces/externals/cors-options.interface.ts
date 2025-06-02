type CorsOrigin = boolean | string | RegExp | (string | RegExp)[];
type CorsOriginCustom = (origin: string, callback: (err: Error | null, origin?: CorsOrigin)=> void) => void;
export interface CorsOptions {
  origin?: CorsOrigin | CorsOriginCustom;
  methods?: string | string[];
  allowHeaders?: string | string[];
  credentials?: boolean;
  maxAge?: number;
}