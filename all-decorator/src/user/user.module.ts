import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AppModule } from 'src/app.module';

@Module({
  // imports: [forwardRef(() => AppModule)], // 解决循环依赖问题 但是这里最好在架构上解决 正确划分模块职责
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
