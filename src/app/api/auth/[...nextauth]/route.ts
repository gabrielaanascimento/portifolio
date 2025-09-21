// pages/api/auth/[...nextauth].ts
import { login } from '@/services/login';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Certifique-se de que a tipagem do seu usuário é precisa
interface DBUser {
  id: string;
  username: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        try {
          const loginResponse = await login(credentials);

          if (loginResponse && loginResponse.user) {
            const user: DBUser = {
              id: loginResponse.user.id,
              username: loginResponse.user.username,
            };
            return { id: user.id, name: user.username };
          }
        } catch (error) {
          console.error('Login failed:', error);
          return null;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.id) {
        session.user = {
          ...session.user,
          id: token.id,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);