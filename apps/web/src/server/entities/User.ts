import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
} from "@mikro-orm/core";
import { Account, Session } from "@next-auth/mikro-orm-adapter/dist/entities";
import { v4 } from "uuid";

import { defaultEntities } from "@next-auth/mikro-orm-adapter";
// const { Account, Session } = defaultEntities;

@Entity()
export class User implements defaultEntities.User {
  @PrimaryKey()
  id: string = v4();

  @Property({ nullable: true })
  name?: string;

  @Property({ nullable: true })
  @Unique()
  email?: string;

  @Property({ type: "Date", nullable: true })
  emailVerified: Date | null = null;

  @Property({ nullable: true })
  image?: string;

  @OneToMany({
    entity: () => Session,
    mappedBy: (session) => session.user,
    hidden: true,
    orphanRemoval: true,
    cascade: [Cascade.ALL],
  })
  sessions = new Collection<Session>(this);

  @OneToMany({
    entity: () => Account,
    mappedBy: (account) => account.user,
    hidden: true,
    orphanRemoval: true,
    cascade: [Cascade.ALL],
  })
  accounts = new Collection<Account>(this);

  // @Enum({ hidden: true })
  // role = "ADMIN";
}
