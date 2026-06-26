import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject('app_service') // 通过 @Inject 指定注入的 provider 的 token 即可, 这里AppService 这个 class 本身就是 token
  private readonly appService: AppService;

  @Inject('person')
  private readonly person: { name: string; age: number };

  @Inject('person2')
  private readonly person2: { name: string; desc: string };

  @Inject('person3')
  private readonly person3: { name: string; age: number; desc: string };

  @Inject('person4')
  private readonly person4: { name: string; desc: string };

  @Inject('person5')
  private readonly person5: { name: string; desc: string };

  @Get()
  getHello(): string {
    console.log(this.person);
    console.log(this.person2);
    console.log(this.person3);
    console.log(this.person4);
    console.log(this.person5);
    return this.appService.getHello();
  }
}
