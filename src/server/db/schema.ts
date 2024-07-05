import { sql } from "drizzle-orm";
import {
  index,
  pgTable,
  serial,
  timestamp,
  varchar,
  text,
} from "drizzle-orm/pg-core";

export const images = pgTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
    urlIndex: index("url_idx").on(example.url),
  }),
);
