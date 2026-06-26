import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return `add user ${JSON.stringify(createUserDto)}`;
  }

  findAll(name: string, age: number) {
    return `This action returns all user ${name} ${age}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user ${updateUserDto.name} ${updateUserDto.age}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
