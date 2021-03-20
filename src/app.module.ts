import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from "./db/database.module";
import {ConfigModule} from "@nestjs/config";

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
      DatabaseModule,
      ConfigModule.forRoot({
        envFilePath: [
          `.${environment}.local.env`,
          `.${environment}.env`,
        ],
        isGlobal: true
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
