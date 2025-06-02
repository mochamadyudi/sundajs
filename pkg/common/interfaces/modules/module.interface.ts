import { Tipe } from '../tipe.interface';
import { Panyadia } from '../panyadia.interface';

/**
 * Struktur metadata pikeun modul SundaJS.
 * Dipaké pikeun ngadaptarkeun controller jeung provider dina hiji modul.
 */
export interface ModuleMetadata {
  /**
   * Daptar controller atawa route handler nu kudu di-registrasi dina modul.
   * Biasana ngandung kelas nu ngatur request-response.
   *
   * @example
   * ```ts
   * pangatur: [UserController, AuthController]
   * ```
   */
  pangatur?: Tipe[] | [];

  /**
   * Daptar provider (panyadia) sapertos service, helper, repository,
   * atawa resource séjén nu bisa di-*inject* kana controller atawa service séjénna.
   *
   * @example
   * ```ts
   * panyadia: [UserService, AuthService]
   * ```
   */
  panyadia?: Panyadia[] | [];
}

export {}
