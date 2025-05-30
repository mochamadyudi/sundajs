export enum Wewengkon {
  BAKU = 0, // kata lain dari default
  SAMENTARA = 1, // kata lain dari transient
  PAMUNDUT = 2 // kata lain dari REQUEST
}

export interface PilihanWewengkon {
  wewengkon?: Wewengkon;
  tahanLila?: boolean;
}