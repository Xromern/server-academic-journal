import {TypeOrmModule} from "@nestjs/typeorm";
import * as mainDbConfig from "./config/main-db.config";

export const databaseProviders = [
    TypeOrmModule.forRoot(mainDbConfig),
];
