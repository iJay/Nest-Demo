## AOP架构

### 中间件Middleware

> 中间件是 Express 里的概念，Nest 的底层是 Express，所以自然也可以使用中间件，但是做了进一步的细分，分为了全局中间件和路由中间件。

> AOP 是把通用逻辑抽离出来，通过切面的方式添加到某个地方，可以复用和动态增删切面逻辑.

> Nest 的 Middleware、Guard、Interceptor、Pipe、ExceptionFilter 都是 AOP 思想的实现，只不过是不同位置的切面，它们都可以灵活的作用在某个路由或者全部路由

请求进入

↓
Express app.use() 全局中间件
    before
    next()
    after

↓
Nest Middleware
    before
    next()
    after

↓
Guard

↓
Interceptor（前置）

↓
Pipe

↓
Controller

↓
Service

↑
Controller返回

↑
Interceptor（后置）

↑
Exception Filter（如果有异常）

响应发送


> **总结：我们通过源码来看了它们的调用顺序，Middleware 是 Express 的概念，在最外层，到了某个路由之后，会先调用 Guard，Guard 用于判断路由有没有权限访问，然后会调用 Interceptor，对 Contoller 前后扩展一些逻辑，在到达目标 Controller 之前，还会调用 Pipe 来对参数做检验和转换。所有的 HttpException 的异常都会被 ExceptionFilter 处理，返回不同的响应。**