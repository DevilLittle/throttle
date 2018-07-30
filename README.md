Create project:
```
npm init   ----package.json

mkdir src
touch main.js

npm install jasmine -g
jasmine init

cd spec
touch main.spec.js

```

Run Project
```
jasmine
```

###函数节流和函数防抖

最近有频繁遇见的一个场景：在做搜索(包括数据量大做模糊搜索，后端实现)时，会遇见这种情况，在input标签上绑定@input
函数(请求函数)，由于@input监控变化时，发请求非常高频，以至于当某一次请求回来的数据量非常大时，在这次请求之后的返
回数据量小，所以先请求的数据量大的最后返回并展示在页面上，导致用户看起来页面查询出来的结果不正确

我们的目的是为了在搜索时做到结果实时显示，但是由于@input的监控，在输入搜索关键字的时候，发送多次http异步请求，这样频繁地请求会导致流量损耗与性能下降。

由于事件频繁被触发，因而频繁执行DOM操作、资源加载等重行为，导致UI停顿甚至浏览器崩溃的常见场景：
* window对象的resize、scroll事件
* 拖拽时的mousemove事件
* 文字输入、自动完成的keyup事件

为了能使这些场景得到优化，就需要用到函数节流和函数防抖；

##### 函数防抖（debounce）

概念：
当调用动作过n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间；

函数实现：
```
function _debounce(fn,wait){
    var timer = null;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
        },wait)
    }
}

function fn(){
    console.log(1)
}
window.onscroll = _debounce(fn,500)

```


###### 函数节流（throttle）

概念：
预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期;

函数实现：

以页面的滚动事件为例，如果页面很长，我们一直在滚动页面，那fn方法就一直不会被执行，按照这个思路改进一下防抖函数;
```
function _throttle(fn,wait,time){
    var previous = null; //记录上一次运行的时间
    var timer = null;

    return function(){
        var now = +new Date();

        if(!previous) previous = now;
        //当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
        if(now - previous > time){
            clearTimeout(timer);
            fn();
            previous = now;// 执行函数后，马上记录当前时间
        }else{
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn();
            },wait);
        }
    }
}
function fn(){
    console.log(1)
}
window.onscroll = _throttle(fn,500,2000)
```
