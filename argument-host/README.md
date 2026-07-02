# ExecutionContext：切换不同上下文
> ArgumentHost 是用于切换 http、websocket、rpc 等上下文类型的，可以根据上下文类型取到对应的 argument，让 Exception Filter 等在不同的上下文中复用。推荐的方式是ArgumentHost根据 getType 的结果分别 switchToHttp、switchToWs、swtichToRpc，然后再取对应的 argument。

> ExecutionContext 是 ArgumentHost 的子类，扩展了 getClass、getHandler 方法。所以这里为什么 ExecutionContext 里需要拿到目标 class 和 handler 呢？因为 Guard、Interceptor 的逻辑可能要根据目标 class、handler 有没有某些装饰而决定怎么处理。

> 写 Filter、Guard、Exception Filter 的时候，是需要用到这些 api 的。