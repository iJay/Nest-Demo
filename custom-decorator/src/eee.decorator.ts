import { applyDecorators, Controller, SetMetadata } from '@nestjs/common';

export const Eee = (path, metadata) => {
  return applyDecorators(Controller(path), SetMetadata('ddd', metadata));
};
