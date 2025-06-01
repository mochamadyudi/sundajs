/*
 * Copyright (c) 2025. Mochamad Yudi.
 * Email: mochamadyudi@gmail.com
 * GitHub: https://github.com/mochamadyudi
 * LinkedIn: https://linkedin.com/in/mochamadyudi
 *
 */
import * as express from 'express';

import { SundaExpressAdapter } from './sunda-express.adapter';

export class SundaExpress extends SundaExpressAdapter<any, express.Request, express.Response> {
  protected instance: express.Express;
  
  constructor() {
    super();
    this.instance = express();
  }

}