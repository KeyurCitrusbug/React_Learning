import { NextResponse, type NextRequest } from "next/server";
import { getCookies } from 'next-client-cookies/server';
export function middleware(request: NextRequest) 
{
  const cookies = getCookies()
  const userdata=request.cookies.get('user_data')
  const { pathname } = request.nextUrl;
  if (pathname === "/showdetails") {
    if (userdata) {
      return NextResponse.next(); 
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
