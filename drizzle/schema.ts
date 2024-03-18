import { pgTable, serial } from "drizzle-orm/pg-core";
//define a simple table
export const test = pgTable("test",{
    id:serial("id").primaryKey()
})