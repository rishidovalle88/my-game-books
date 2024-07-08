import type { APIContext } from 'astro';

export function GET({ request }: APIContext) {
  return new Response(`Hello ${request.method}`);
}