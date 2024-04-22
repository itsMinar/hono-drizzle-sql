import { env } from '@/env';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './src/drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
