import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';

@Module({
  imports: [OtherModule], // 这里 import 了 OtherModule，那么 OtherModule 的 provider 就可以在当前模块注入了
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
