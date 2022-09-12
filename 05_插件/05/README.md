### 插件

    插件的本質就是一個對象。
    
1. 功能：用于增强 Vue

2. 本质：包含 install 方法的一个对象，install 的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：
    ```
    对象.install = function (Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)

        // 2. 添加全局指令
        Vue.directive(....)

        // 3. 配置全局混入(合)
        Vue.mixin(....)

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```

4. 使用插件：Vue.use()