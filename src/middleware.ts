import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: ['/', '/((?!api|_next|.*\\.|\\[...not-found\\]|home).*)'],
};
