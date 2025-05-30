import { task, src, series } from 'gulp';
import * as clean from 'gulp-clean';
import * as deleteEmpty from 'delete-empty';
import { __SOURCE__, TASKS_METADATA } from '../config';

function output() {
  return src(
    [
      `${__SOURCE__}/**/*.js`,
      `${__SOURCE__}/**/*.js.map`,
      `${__SOURCE__}/**/*.d.ts.map`,
      `${__SOURCE__}/**/*.d.ts`,
    ],
    {
      read: false,
    }
  ).pipe(clean());
}

function dir(cb: () => void) {
  deleteEmpty.sync(`${__SOURCE__}/`);
  cb();
}

task(TASKS_METADATA.CLEAN.OUTPUT, output);
task(TASKS_METADATA.CLEAN.DIR, dir);
task(TASKS_METADATA.CLEAN.BUNDLE, series(TASKS_METADATA.CLEAN.OUTPUT, TASKS_METADATA.CLEAN.DIR));
