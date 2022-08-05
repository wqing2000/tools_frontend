/*
 * 使用了闭包，在终端环境用node执行，需要手动关闭
 */
function customSetInteval(fn, delay) {
  let res = {
    timer: "",
  };
  function f1() {
    res.timer = setTimeout(f1, delay);
    fn();
  }
  f1();
  return res;
}

function customClearInterval(timer) {
  clearTimeout(timer.timer);
}

let num = 1;
function thing(e) {
  console.log(num++);
}

let timer = customSetInteval(thing, 1000);

// js原生定时器
setInterval(() => {
  customClearInterval(timer);
}, 5000);
