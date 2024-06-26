import { createEnv } from '@t3-oss/env-core';
import 'dotenv/config';
import { z } from 'zod';

export const env = createEnv({
  server: {
    PORT: z.coerce.number().min(1),
    DATABASE_URL: z.string().url(),
  },

  runtimeEnv: process.env,
});
