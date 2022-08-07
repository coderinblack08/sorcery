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
});
