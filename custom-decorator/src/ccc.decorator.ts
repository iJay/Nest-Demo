import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// 自定义参数装饰器
export const Ccc = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    // data 很明显就是传入的参数，而 ExecutionContext 前面用过，可以取出 request、response 对象
    console.log(data, ctx);
    return 'ccc';
  },
);
