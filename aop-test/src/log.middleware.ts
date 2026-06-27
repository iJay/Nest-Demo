import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('----LogMiddleware---- before2');
    next();
    console.log('----LogMiddleware---- after2');
  }
}
