
## IOC解决了什么问题
> 问题：例如Controller 依赖了 Service 实现业务逻辑，Service 依赖了 Repository 来做增删改查，Repository 依赖 DataSource 来建立连接，DataSource 又需要从 Config 对象拿到用户名密码等信息。这就导致了创建这些对象是很复杂的，你要理清它们之间的依赖关系，哪个先创建哪个后创建。也就是说，在应用初始化的时候，需要理清依赖的先后关系，创建一大堆对象组合起来，还要保证不要多次 new，会很麻烦。

> 解决方案：依赖注入（控制反转的一种实现）。简单来说就是，在 class 上声明依赖了啥，然后让工具去分析我声明的依赖关系，根据先后顺序自动把对象创建好了并组装起来。有一个放对象的容器，程序初始化的时候会扫描 class 上声明的依赖关系，然后把这些 class 都给 new 一个实例放到容器里。创建对象的时候，还会把它们依赖的对象注入进去。

**本来是手动 new 依赖对象，然后组装起来，现在是声明依赖了啥，等待被注入**

AppService 声明了 @Injectable，代表这个 class 可注入，那么 nest 就会把它的对象放到 IOC 容器里。

AppController 声明了 @Controller，代表这个 class 可以被注入，nest 也会把它放到 IoC 容器里。

> 问题“为什么controller”是单独的装饰器？
> 因为 Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明。而 Controller 只需要被注入，所以 nest 单独给它加了 @Controller 的装饰器。就像是@Module声明的模块，其中controllers是控制器，只能被注入。providers 里可以被注入，也可以注入别的对象。

> 当 import 别的模块后，那个模块 exports 的 provider 就可以在当前模块注入了,参考otherService。

## nest项目debugger
> 借助vscode中的调试配置
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "debug nest",
      "request": "launch",
      "runtimeExecutable": "npm",
      "args": [
        "run",
        "start:dev"
      ],
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node",
      "console": "integratedTerminal",
    }
  ]
}
```