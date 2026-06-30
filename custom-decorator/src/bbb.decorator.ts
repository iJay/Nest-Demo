import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';

// 自定义方法装饰器
export function Bbb(path: string, role: string) {
  // 在自定义装饰器里通过 applyDecorators 调用其他装饰器
  return applyDecorators(Get(path), Aaa(role), UseGuards(AaaGuard));
}
