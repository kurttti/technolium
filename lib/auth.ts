import { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';

interface CustomUser {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

interface CustomSession extends Session {
  user: CustomUser;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.username === 'admin' && credentials?.password === 'admin') {
          return {
            id: '1',
            email: 'admin@example.com',
            name: 'Administrator',
            isAdmin: true,
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.isAdmin = (user as CustomUser).isAdmin;
      }
      return token as JWT & { isAdmin: boolean };
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user = {
          ...session.user,
          id: '1',
          isAdmin: (token as JWT & { isAdmin: boolean }).isAdmin
        } as CustomUser;
      }
      return session as CustomSession;
    },
  },
  pages: {
    signIn: '/login',
  },
  // Отключаем автоматические сессионные запросы
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};
