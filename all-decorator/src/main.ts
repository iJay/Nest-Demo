import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      // 指定加密的密钥和 cookie 的存活时间
      secret: 'my-secret',
      cookie: {
        maxAge: 10000,
      },
    }),
  ); // 启用 session 中间件
  // 设置静态文件的访问路径
  app.useStaticAssets(join(__dirname, '..', 'public')); // 静态文件的访问路径
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 设置视图引擎的访问路径
  app.setViewEngine('hbs'); // 设置视图引擎
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
