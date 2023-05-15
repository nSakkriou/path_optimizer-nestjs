import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { AddressesModule } from './addresses/addresses.module';
import { BuildModule } from './build/build.module';

@Module({
  imports: [SessionsModule, AddressesModule, BuildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
