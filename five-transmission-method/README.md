## 基础概念
- Controller 处理路由和解析请求参数
- Handler 控制器控制路由的方法
- Service 操作数据库实现业务逻辑处理
- Module 模块，包含controller、service等
- DTO Data Transfer Object，数据传输对象，用于封装请求体里的对象
- Entities 对应数据库表的实体
- 面向切面编程AOP 多个请求响应流程中可以复用的逻辑，比如日志记录等。
- 控制反转/依赖注入IOC 只要声明依赖，运行时Nest就会自动注入依赖
- nest cli 创建项目、创建模块，创建Controller、创建Service 

## nest-cli
- nest new demo01 新建项目 
- nest new -h 查看nest new的相关命令行参数
eg: --skip-git创建项目跳过git初始化；--package-manager是指定包管理器；--skip-install跳过npm install的过程。
- nest generate controller aaa 生成controller
- nest generage service aaa 生成service
- nest generate user resource  生成controller、service、dto、entities
- nest build 在 dist 目录下生成编译后的代码
- nest build -h 查看nest build的相关命令行参数
eg: --watch 是监听文件变动，自动build（只是监听 ts、js 文件，加上 --watchAssets 会连别的文件一同监听变化）;--path 是指定 tsc 配置文件的路径;--config 是指定nest cli配置文件的路径;--wepback 使用webpack编译，默认使用tsc,从dist目录中可发现webpack会打包成一个main文件，tsc不做打包。
- nest-cli.json 可以配置相关参数

## 5种http传输方式
1. url param 路径中的参数类似```http://guang.zxg/person/1111```
2. url query url中?分隔符 类似```http://guang.zxg/person?name=encodeURIComponent('光')&age=20```其中非英文的字符和一些特殊字符要经过编码，可以使用 encodeURIComponent 的 api 来编码
3. form-urlencode form表单提交的数据 和url query的区别只是放在了body里 content-type是application/x-www-form-urlencoded
4. form-data 不再是通过 & 分隔数据，而是用 --------- + 一串数字做为 boundary 分隔符。content type 为 multipart/form-data，然后指定 boundary 也就是分割线。这种方式适合传输文件，而且可以传输多个文件。
5. json 传输 json 数据，指定content type 为 application/json。
- Nest 解析 form data 使用AnyFilesInterceptor的拦截器，用@UseInterceptors装饰器启用，然后通过 @UploadedFiles来取。


