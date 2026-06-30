import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    if (isNaN(parseInt(value))) {
      throw new BadRequestException(`${metadata.data} is not a number`);
    }
    return typeof value === 'number' ? value : parseInt(value);
  }
}
