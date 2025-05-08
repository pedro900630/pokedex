import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
  MONGODB: string;
}

const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  MONGODB: Joi.string().required(),
}).unknown(true);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { error, value } = envsSchema.validate(process.env);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const envVars: EnvVars = value;

if (error) throw new Error(`Config validation error: ${error.message}`);

export const envs = {
  port: envVars.PORT,
  mongodb: envVars.MONGODB,
};
