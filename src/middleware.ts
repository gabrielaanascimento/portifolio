// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Protege todas as rotas dentro de /dashboard
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      // Redireciona para a página de login se não houver um token
      const url = new URL('/login', req.url);
      url.searchParams.set('callbackUrl', req.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // O middleware só será executado nessas rotas
  matcher: ['/dashboard/:path*', '/api/auth/:path*'],
};