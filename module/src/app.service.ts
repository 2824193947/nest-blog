import { Injectable } from '@nestjs/common';

// @Injectable 是自动分析consrouter构造函数, 注入其他依赖
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
