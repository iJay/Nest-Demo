import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';

@Injectable()
export class DddService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('DddService onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('DddService onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('DddService onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('DddService beforeApplicationShutdown', signal ?? 'unknown');
  }

  onApplicationShutdown(signal?: string) {
    console.log('DddService onApplicationShutdown', signal ?? 'unknown');
  }

  create(createDddDto: CreateDddDto) {
    console.log('createDddDto', createDddDto);
    return 'This action adds a new ddd';
  }

  findAll() {
    return `This action returns all ddd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ddd`;
  }

  update(id: number, updateDddDto: UpdateDddDto) {
    console.log('updateDddDto', updateDddDto);
    return `This action updates a #${id} ddd`;
  }

  remove(id: number) {
    return `This action removes a #${id} ddd`;
  }
}
