// vm 和 vc 都可以用
export default {  // 使用默認暴露

    // vue 帮你调用 install 方法
    install(Vue, x, y, z){ // vm 的构造函数 Vue()

        // 可以接收到從 main.js 文件中傳遞過來的參數。
        console.log(x, y, z);

        // console.log(Vue); // vm 的构造函数 Vue()

        //全局过滤器
        Vue.filter('mySlice', function (val){
            return val.slice(0, 4);
        });


        //全局指令
        Vue.directive('fbind', {
            bind(el, binding){
                // console.log('bind')
                el.value = binding.value;
            },
            // 指令被插入页面时
            inserted(el, binding){
                // console.log('inserted')
                el.focus();
            },
            // 指令所在模版被重新解析时
            update(el, binding){
                // console.log('update');
                el.value = binding.value;
            }
        });


        //全局混入
        Vue.mixin({
            data(){
                return {
                    x:1,
                    y:2
                }
            }
        });

        // 给 vue 原型上添加一个方法，vc 和 vm 都可以使用。
        Vue.prototype.hello = function (){
            alert('hello')
        }
    }
}