export const __SOURCE__ = 'pkg';
export const __SOURCE_SAMPLE__ = 'sample';

export const TASKS_METADATA = {
  CLEAN: {
    OUTPUT: 'clean:output',
    DIR: 'clean:dir',
    BUNDLE: 'clean:bundle',
  },
  COPY: {
    MISCELLANEOUS: 'clean:misc',
  },
  MOVE: {
    SAMPLE: 'move:sample',
    NODE_MODULES: 'move:node_modules',
  },
  SAMPLE: {
    INSTALL: 'sample:install',
    BUILD: 'sample:build',
    TEST: 'sample:test',
    E2E: 'sample:test:e2e'
  }
}