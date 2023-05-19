import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { AddressesModule } from './addresses/addresses.module';
import { BuildModule } from './build/build.module';
import {ServeStaticModule} from "@nestjs/serve-static"
import {join} from "path"

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    SessionsModule, AddressesModule, BuildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
