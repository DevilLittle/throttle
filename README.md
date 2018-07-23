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

函数节流和函数防抖

最近有频繁遇见的一个场景：在做搜索(包括数据量大做模糊搜索，后端实现)时，会遇见这种情况，在input标签上绑定@input函数(请求函数)
