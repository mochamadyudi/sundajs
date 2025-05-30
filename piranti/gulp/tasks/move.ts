import { dest, src, task } from 'gulp';
import { join } from 'path';
import { __SOURCE_SAMPLE__, TASKS_METADATA } from '../config';
import { containsPackageJson, getDirs } from '../util/helper';

const distFiles = src(['pkg/**/*.js', 'pkg/**/*.d.ts']);

function goNodeModules(){
  return distFiles.pipe(dest('node_modules/@sundajs'))
}

function goSample(){
  const sampleDir = getDirs(__SOURCE_SAMPLE__);
  const flattenedSampleDirectory: string[] = [];

  for (const dir of sampleDir){
    if(containsPackageJson(dir)){
      flattenedSampleDirectory.push(dir);
    }else{
      flattenedSampleDirectory.push(...getDirs(dir));
    }
  }

  return flattenedSampleDirectory.reduce(
    (distFile, dir) => distFile.pipe(
      dest(join(dir,'/node_modules/@sundajs'))
    ), distFiles
  );
}

task(TASKS_METADATA.MOVE.NODE_MODULES, goNodeModules);
task(TASKS_METADATA.MOVE.SAMPLE, goSample);