import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigType } from './types/config';

@Controller()
export class AppController {
  /*
  下面直接声明出类型就可以使用, 是框架自动将声明进行了实例,
  类似于下面的意思, 并且会自动解决依赖
  constructor(private readonly appService: AppService) {
    this.appService = new AppService()
  }
  */
  constructor(
    private readonly appService: AppService,
    @Inject('ConfigService')
    private configService: ConfigType,
  ) {}

  @Get('/')
  getHello(): string {
    return `${this.configService.url}`;
  }
}
