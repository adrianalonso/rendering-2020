import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const database = process.env.DATABASE_NAME || 'talks';
const url = process.env.DATABASE_HOST + '/' + database;
const config: ConnectionOptions = {
  type: 'mysql',
  database,
  url,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export = config;
