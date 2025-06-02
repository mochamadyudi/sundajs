import { EcosystemEnum } from '../enums';

import { CorsOptions } from './externals/cors-options.interface';


export interface SundaApplicationOptions {
  cors?: boolean | CorsOptions;
  ecosystem?: EcosystemEnum
}