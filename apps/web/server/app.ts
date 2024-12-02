import { createRequestHandler } from 'react-router';
import type { Config, Context } from '@netlify/functions';

declare module 'react-router' {
  interface AppLoadContext {
    VALUE_FROM_NETLIFY: string;
  }
}

const requestHandler = createRequestHandler(
  // @ts-expect-error - virtual module provided by React Router at build time
  () => import('virtual:react-router/server-build'),
  import.meta.env.MODE
);

export default async (request: Request, _context: Context) => {
  return requestHandler(request, {
    VALUE_FROM_NETLIFY: 'Hello from Netlify'
  });
};

export const config: Config = {
  path: '/*',
  preferStatic: true
};
