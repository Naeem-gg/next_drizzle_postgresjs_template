import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
//define a simple table
export const test = pgTable("test",{
    id:serial("id").primaryKey(),
    name:varchar("name").notNull(),
    password:varchar("password").notNull(),
    email:varchar("email").notNull()
    
})