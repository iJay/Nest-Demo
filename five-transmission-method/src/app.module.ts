import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AaaModule } from './aaa/aaa.module';

@Module({
  imports: [UserModule, AaaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
