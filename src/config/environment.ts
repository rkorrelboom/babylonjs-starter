import * as debug from 'debug';

const setEnvs: any = {};
const setEnvDefault = (key: string, val: any) => {
  if (!process.env[key]) {
    process.env[key] = val;
  }
  setEnvs[key] = process.env[key];
};

setEnvDefault('DEBUG', 'app:*');
setEnvDefault('NODE_ENV', 'development');
setEnvDefault('PORT', 3000);
setEnvDefault('HOST', 'localhost');

debug.enable(process.env.DEBUG);
const log = debug('app:environment');

log(setEnvs);
