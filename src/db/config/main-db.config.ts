import {ConnectionOptions} from 'typeorm';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import {ConnectionName} from "../enum/connection-name.enum";

const environment = process.env.NODE_ENV || 'development';
const data: any = dotenv.parse(fs.readFileSync(`.${environment}.local.env`));

const config: ConnectionOptions = {
    name: ConnectionName.MAIN,
    type: data.dbType,
    host: data.dbHost,
    port: +data.dbPort,
    username: data.dbUser,
    password: data.dbPassword,
    database: data.dbDatabaseName,
    entities: ["dist/**/*.entity{.ts,.js}"],
    dropSchema: false,
    synchronize: false,
    migrationsRun: false,
    migrations: ["dist/db/migrations/*{.ts,.js}"],
    cli: {
        migrationsDir: "src/db/migrations"
    }
};


export = config;
