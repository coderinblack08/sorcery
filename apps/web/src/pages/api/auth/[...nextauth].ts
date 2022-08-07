import NextAuth from "next-auth";
import { MikroOrmAdapter } from "@next-auth/mikro-orm-adapter";
import { connectionConfig } from "../../../server/connection";
import { MongoDriver } from "@mikro-orm/mongodb";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  adapter: MikroOrmAdapter<MongoDriver>(connectionConfig),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) session.user.id = token.uid as string;
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) token.uid = user.id;
      return token;
    },
  },
  session: { strategy: "jwt" },
  pages: { signIn: "/" },
  secret: process.env.NEXT_AUTH_SECRET,
});
