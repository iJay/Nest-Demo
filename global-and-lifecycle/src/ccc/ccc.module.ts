import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('CccModule onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccModule onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccModule onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('CccModule beforeApplicationShutdown', signal ?? 'unknown');
  }

  onApplicationShutdown(signal?: string) {
    const cccService = this.moduleRef.get<CccService>(CccService); // moduleRef 就是当前模块的引用
    // 在@nestjs/typeorm、@nestjs/mongoose中使用这个方法可以获取到数据库的连接实例，然后调用 disconnect 方法断开连接。
    console.log('------------------------', cccService.findAll());
    console.log('CccModule onApplicationShutdown', signal ?? 'unknown');
  }
}
