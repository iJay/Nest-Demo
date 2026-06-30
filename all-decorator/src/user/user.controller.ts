import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseFilters,
  HttpStatus,
  HttpException,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
  SetMetadata,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception/http-exception.filter';
import { LoginCheckGuard } from 'src/common/guard/login-check/login-check.guard';
import { LogInterceptor } from 'src/common/interceptor/log-interceptor/log.interceptor';
import { ParseIntValidatorPipe } from 'src/common/pipe/parse-int-pipe-validator/parseint.validator.pipe';

@Controller('user')
@UseInterceptors(LogInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject('Guang')
  private readonly guang: Record<string, unknown>;

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseFilters(HttpExceptionFilter)
  findAll(@Query('name') name: string) {
    console.log('this.guang', this.guang);
    console.log('name', name);
    throw new HttpException('Custom HttpException', HttpStatus.BAD_REQUEST);
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(LoginCheckGuard)
  @SetMetadata('role', ['user'])
  @UsePipes(new ParseIntValidatorPipe()) // 这里的pipe会对每一个参数都进行验证
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
