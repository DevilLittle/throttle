//普通函数
function ordinaryHandle() {
    console.log("普通函数");
}

let ordinary = document.getElementById('ordinary');
ordinary.onscroll  = ordinaryHandle;


//函数防抖
let timer = false;

function antiSharkHandle() {
    // 清除未执行的代码，重置回初始化状态
    clearTimeout(timer);

    timer = setTimeout(function(){
        console.log("函数防抖");
    }, 300);
}

let shark = document.getElementById('shark');
shark.onscroll  = antiSharkHandle;


//函数节流的两种实现方法

//方法一：
function throttleHandle() {
    let vm = this;

    let canRun = true;
    return function () {
        if(!canRun){
            // 判断是否已空闲，如果在执行中，则直接return
            return;
        }

        canRun = false;
        setTimeout(function(){
            console.log("函数节流");
            canRun = true;
        }, 300);
    }
}

let throttleDom = document.getElementById('throttle');
throttleDom.onscroll  = throttleHandle();

//方法二：
function _throttle(fn,wait,time){
    let previous = null; //记录上一次运行的时间
    let timer = null;

    return function(){
        let now = +new Date();

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

let throttle = document.getElementById('throttle');
throttle.onscroll  = _throttle(fn,500,2000);
