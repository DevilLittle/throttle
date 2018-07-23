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

最近有频繁遇见的一个场景：在做搜索(包括数据量大做模糊搜索，后端实现)时，会遇见这种情况，在input标签上绑定@input函数(请求函数)，由于@input监控变化时，发请求非常高频，以至于当某一次请求回来的数据量非常大时，在这次请求之后的返回数据量小，所以先请求的数据量大的最后返回并展示在页面上，导致用户看起来页面查询出来的结果不正确

虽然在界面上看不出来差异，但是在浏览器的network中可以明显的看出来问题出在哪里：
1.首先，对于搜索词为空时，也发送了很多请求；

我们的目的是为了在搜索时做到结果实时显示，但是由于@input的监控，在输入搜索关键字的时候，发送多次http异步请求，这样频繁地请求会导致流量损耗与性能下降。
