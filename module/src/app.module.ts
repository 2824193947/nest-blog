import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config.service';
/**
 * 1. 大概就是装饰器修饰AppModule方法, 让他有AppController, AppService继承这些配置选项
 * 2. 然后通过nest中例如 @get 装饰器修饰方法接收到请求, 通过this.service方法调用AppService中的方法
 */
// 使用dotenv 注册 .env

// 类装饰器, 修饰下方导出的类, 传入的参数, 想要传参就需要是装饰器工厂
@Module({
  imports: [], // 引入其他模块
  controllers: [AppController],
  providers: [AppService, ConfigService], // provider有多种, 可以提供服务, 还可以提供基本数据类型, 也可以类似工厂函数的函数动态配置
  exports: [], // 暴露其他模块可以使用的模块
})
export class AppModule {}
