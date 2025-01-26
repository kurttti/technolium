import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Если пользователь не авторизован и пытается получить доступ к /admin,
    // перенаправляем его на /login
    if (!req.nextauth.token && req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    
    // Если пользователь авторизован, но не админ
    if (req.nextauth.token && !req.nextauth.token.isAdmin && req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
);

// Указываем для каких путей применять middleware
export const config = {
  matcher: ["/admin/:path*"]
};
