/*
 * Copyright (c) 2025. Mochamad Yudi.
 * Email: mochamadyudi@gmail.com
 * GitHub: https://github.com/mochamadyudi
 * LinkedIn: https://linkedin.com/in/mochamadyudi
 *
 */

import { Tipe } from './tipe.interface';
import { Abstract } from './abstract.interface';
import { Wewengkon } from './wewengkon-pilihan.interface';

export type Panyadia<T = any> = Tipe<T> | ClassPanyadia<T> | T;
export interface ClassPanyadia<T = any> {
  panyadia?: string | symbol | Tipe<T> | Abstract<T> | Function;
  wewengkon?: Wewengkon;
  sungsum?: never;
  tahanLila?: boolean;
}