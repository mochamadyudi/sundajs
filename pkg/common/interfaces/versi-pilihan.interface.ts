import { TipeVersi } from '../enums';

export const VERSI_NETRAL = Symbol('VERSI_NETRAL');

export type VersiIsi = string | typeof VERSI_NETRAL | Array<string | typeof VERSI_NETRAL>

export interface VersiPilihan {
  versi?: VersiIsi;
}

export interface VersiSirahPilihan {
  tipe: TipeVersi.SIRAH;
  sirah: string;
}

export interface UriVersiPilihan {
  tipe: TipeVersi.URI;
  awalan?: string | false;
}

export interface MediaTipeVersiPilihan {
  tipe: TipeVersi.TIPE_MEDIA;
  konci: string;
}

export interface KumahaSiaVersiPilihan {
  tipe: TipeVersi.KUMAHA_SIA;
  panyokot: (request: unknown) => string | string[];
}

interface VersiUmumPilihan {
  bawaan?: VersiPilihan['versi'];
}

export type PangaturVersiPilihan =
  VersiUmumPilihan
  & (VersiSirahPilihan | UriVersiPilihan | MediaTipeVersiPilihan | KumahaSiaVersiPilihan)