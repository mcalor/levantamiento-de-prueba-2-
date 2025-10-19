import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// importa aquí también Google, GitHub, etc. si los usas

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // tu lógica de validación de usuario:
        if (!credentials?.email) return null;
        return { id: "1", email: credentials.email };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

// 👇 ESTA PARTE es la CLAVE para que el build no falle
export { handler as GET, handler as POST };