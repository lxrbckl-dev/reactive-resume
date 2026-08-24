import { defineRelations } from "drizzle-orm";
import * as tables from "./schema";

export * as schema from "./schema";

// drizzle-orm 1.0 replaced the client's `schema` option with `relations`
// (Relations v2). `defineRelations(tables)` builds the relational config for
// every table in the schema; this app declares no explicit relations and does
// not use the relational query builder, so the one-argument form is enough.
export const relations = defineRelations(tables);
