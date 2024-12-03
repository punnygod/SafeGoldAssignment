import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');

  const protectedRoutes = ['/product-details'];
  const pathname = request.nextUrl.pathname;
  const isProtected = protectedRoutes.some((path) => pathname.startsWith(path));

  if (isProtected && !token) {
    const loginUrl = new URL('/', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/product-details/:path*'],
};
