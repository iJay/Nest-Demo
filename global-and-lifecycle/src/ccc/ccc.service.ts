import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';

@Injectable()
export class CccService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('CccService onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccService onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccService onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('CccService beforeApplicationShutdown', signal ?? 'unknown');
  }

  onApplicationShutdown(signal?: string) {
    console.log('CccService onApplicationShutdown', signal ?? 'unknown');
  }

  create(createCccDto: CreateCccDto) {
    console.log('createCccDto', createCccDto);
    return 'This action adds a new ccc';
  }

  findAll() {
    return `This action returns all ccc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ccc`;
  }

  update(id: number, updateCccDto: UpdateCccDto) {
    console.log('updateCccDto', updateCccDto);
    return `This action updates a #${id} ccc`;
  }

  remove(id: number) {
    return `This action removes a #${id} ccc`;
  }
}
