import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true});
  app.setBaseViewsDir(join(__dirname, "..", "views"))
  app.useStaticAssets(join(__dirname, "..", "public"))
  app.setViewEngine("ejs")
  
  await app.listen(8888);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
