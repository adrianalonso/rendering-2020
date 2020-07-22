import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Talk } from './entity/talk.entity';
import * as config from './typeorm.config';
import { Speaker } from './entity/speaker.entity';
import { APIController } from './api.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => {
        return config as TypeOrmModuleOptions;
      },
    }),
    TypeOrmModule.forFeature([Talk, Speaker]),
  ],
  controllers: [AppController, APIController],
  providers: [AppService],
})
export class AppModule {}
