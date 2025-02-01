import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Redirect from www to non-www in production
    if (process.env.NODE_ENV === 'production' && req.headers.get('host')?.startsWith('www.')) {
      const url = new URL(req.url);
      url.host = url.host.replace('www.', '');
      return NextResponse.redirect(url);
    }

    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      const response = new NextResponse(null, {
        status: 200,
        headers: new Headers({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'Access-Control-Max-Age': '86400',
        }),
      });
      return response;
    }

    // Если пользователь не авторизован и пытается получить доступ к /admin,
    // перенаправляем его на /login
    if (!req.nextauth.token && req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    
    // Если пользователь авторизован, но не админ
    if (req.nextauth.token && !req.nextauth.token.isAdmin && req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Add CORS headers to all responses
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    
    return response;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Только проверяем авторизацию для /admin маршрутов
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return !!token;
        }
        // Для всех остальных маршрутов разрешаем доступ
        return true;
      }
    },
  }
);

// Указываем для каких путей применять middleware
export const config = {
  matcher: [
    '/admin/:path*',  // Защищаем только админ-маршруты
  ]
}
