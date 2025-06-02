export type ErrorHandler<Req = any, Res = any> = (
  error: any,
  req: Req,
  res: Res,
  next?: Function
) => any;

export type RequestHandler<Req = any, Res = any> = (req: Req, res: Res, next?: Function) => any;

export interface IHttp<Req = any, Res = any, instance = any> {
  /**
   * Ngamimitian aplikasi HTTP, biasa dipake pikeun nyieun instance server jeung setup awal.
   */
  mimiti(): Promise<void> | void;

  /**
   * Masang middleware global atawa jalur husus.
   *
   * Fungsi ieu bisa dipaké pikeun middleware logging,
   * validasi, atau autentikasi.
   *
   * @param jalur Path endpoint (opsional).
   * @param handler Handler fungsi (RequestHandler atawa ErrorHandler).
   * @returns Output dari metode HTTP .use()
   */
  anggo(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Masang middleware pikeun jalur tertentu.
   * @param jalur Jalur path string
   * @param handler Middleware handler
   */
  anggo(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP GET tanpa jalur.
   * @param handler Handler fungsi
   */
  candak(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP GET keur jalur husus.
   * @param jalur Jalur path string
   * @param handler Handler fungsi
   */
  candak(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP POST
   */
  kirim(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  kirim(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP PATCH
   */
  tambar(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  tambar(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP PUT
   */
  gentos(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  gentos(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP DELETE
   */
  hapus(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  hapus(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle sagala HTTP method pikeun jalur nu sarua
   */
  sadayana(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  sadayana(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP HEAD
   */
  sirah(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  sirah(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP SEARCH (biasana keur protokol WebDAV)
   */
  pilarian(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  pilarian(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP PROPFIND (metadata resource)
   */
  milarianSipat(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  milarianSipat(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP PROPPATCH (update metadata)
   */
  tambahSipat(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  tambahSipat(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP MKCOL (nyieun collection/folder)
   */
  jieunFolder(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  jieunFolder(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP COPY (nyalin resource)
   */
  salin(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  salin(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP MOVE (mindahkeun resource)
   */
  pindah(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  pindah(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP LOCK (ngonci resource)
   */
  konci(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  konci(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngahandle HTTP UNLOCK (muka konci resource)
   */
  bukaKonci(handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  bukaKonci(jalur: string, handler: RequestHandler<Req, Res> | ErrorHandler<Req, Res>): any;

  /**
   * Ngadengekeun port pikeun narima request HTTP
   * @param port Port nu rek didengekeun
   */
  dangukeun(port: number): void;

  /**
   * Ngadengekeun port pikeun narima request HTTP
   * @param port Port nu rek didengekeun
   * @param fn Callback mun server geus siap
   */
  dangukeun(port: number, fn?: (banner?: string) => void): void;

  /**
   * Nutup server HTTP
   */
  tutup(): any;
}
