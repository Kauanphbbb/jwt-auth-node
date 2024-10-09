import { z } from 'zod';

// Define the schema as an object with all of the env
// variables and their types
const envSchema = z.object({
  PORT: z.coerce.number().min(1000),
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(1),
});

// Validate `process.env` against our schema
// and return the result
const env = envSchema.parse(process.env);

export { env };
