import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.FORBIDDEN);
  }
}
/**
 *  HttpException 的子类
 *  BadRequestException
    UnauthorizedException
    NotFoundException
    ForbiddenException
    NotAcceptableException
    RequestTimeoutException
    ConflictException
    GoneException
    PayloadTooLargeException
    UnsupportedMediaTypeException
    UnprocessableException
    InternalServerErrorException
    NotImplementedException
    BadGatewayException
    ServiceUnavailableException
    GatewayTimeoutException
 */
