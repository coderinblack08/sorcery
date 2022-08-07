import { MikroORM, MikroORMOptions } from "@mikro-orm/core";
import { MongoHighlighter } from "@mikro-orm/mongo-highlighter";
import type { MongoDriver } from "@mikro-orm/mongodb";
import { User } from "./entities/User";

export const connectionConfig: Partial<MikroORMOptions<MongoDriver>> = {
  dbName: "pergola",
  type: "mongo",
  entitiesTs: ["./entities"],
  entities: ["../"],
  highlighter: new MongoHighlighter(),
  ensureIndexes: true,
  debug: true,
};

const getORM = async () => {
  if (!global.__MikroORM__) {
    global.__MikroORM__ = await MikroORM.init<MongoDriver>(connectionConfig);
  }
  return global.__MikroORM__;
};
