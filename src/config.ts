import dotenv from 'dotenv';

dotenv.config();

const checkEnv = (envVar: string) => {
  if (!process.env[envVar]) {
    throw new Error(`Please define the Enviroment variable ${envVar}`);
  } else {
    return process.env[envVar] as string;
  }
};

const twAuth = {
  consumer_key: checkEnv('consumer_key'),
  consumer_secret: checkEnv('consumer_secret'),
  access_token: checkEnv('access_token'),
  access_token_secret: checkEnv('access_token_secret'),
  timeout_ms: 60 * 1000,
  strictSSL: true,
};
export default twAuth;
