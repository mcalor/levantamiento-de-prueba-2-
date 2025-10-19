import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// o tus providers reales

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // lógica personalizada aquí
        return { id: "user1", email: credentials?.email };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };