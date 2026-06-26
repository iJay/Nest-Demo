## 全局模块和生命周期

### 全剧模块
> 加一个 @Global 的装饰器, 这样它 exports 的 provider 就可以在各处使用了，不需要 imports

### 生命周期
> 1. 递归初始化模块，会依次调用模块内的 controller、provider 的 onModuleInit 方法，然后再调用 module 的 onModuleInit 方法。
> 2. 全部初始化完之后，再依次调用模块内的 controller、provider 的 onApplicationBootstrap 方法，然后调用 module 的 onApplicationBootstrap 方法。
> 3. 监听网络端口。
> 4. 先调用每个模块的 controller、provider 的 onModuleDestroy 方法，然后调用 Module 的 onModuleDestroy 方法。
> 5. 再调用每个模块的 controller、provider 的 beforeApplicationShutdown 方法，然后调用 Module 的 beforeApplicationShutdown 方法。
> 6. 停止监听网络端口。
> 7. 用每个模块的 controller、provider 的 onApplicationShutdown 方法，然后调用 Module 的 onApplicationShutdown 方法。
> 8. 停止进程。

**所有的生命周期函数都是支持 async 的。**