import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import nunjucks = require('nunjucks');
import nunjucksDate = require('nunjucks-date');
nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
  });
  nunjucksDate.install(env);

  app.setViewEngine('njk');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
