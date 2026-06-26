import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';

@Module({
  controllers: [DddController],
  providers: [DddService],
})
export class DddModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onApplicationShutdown(signal?: string) {
    console.log('DddModule onApplicationShutdown', signal ?? 'unknown');
  }
  onModuleInit() {
    console.log('DddModule onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('DddModule onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('DddModule onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('DddModule beforeApplicationShutdown', signal ?? 'unknown');
  }
}
