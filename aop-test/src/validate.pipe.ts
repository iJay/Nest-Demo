import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ForbiddenException } from './ForbiddenException';

// 可以对传入的参数值 value 做参数验证，比如格式、类型是否正确，不正确就抛出异常。也可以做转换，返回转换后的值。
@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('----ValidatePipe in---', value, metadata);
    if (Number.isNaN(parseInt(value))) {
      throw new ForbiddenException(`参数${metadata.data}只能是字符串或数字`);
    }
    return typeof value === 'number' ? value * 10 : parseInt(value) * 10;
  }
}
