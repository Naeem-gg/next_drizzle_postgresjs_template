import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
// for migrations
const migrationClient = postgres("postgres://postgres:Navjivan@0.0.0.0:5432/drizzledb", { max: 1 });
const db = drizzle(migrationClient)
const main = async()=>{
    try{
    console.log("migration started...")
    await migrate(db,{migrationsFolder:"./drizzle/migrations"})
    console.log("migration finished!!")
    migrationClient.end()
    }catch(error){
        console.log(error)
    }
}

main()