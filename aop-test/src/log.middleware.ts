import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('----Log NestMiddleware---- before');
    next();
    console.log('----Log NestMiddleware---- after');
  }
}
