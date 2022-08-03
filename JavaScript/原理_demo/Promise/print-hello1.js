function repeat(func, times, wait) {
  return async function (...arg) {
    for (let i = 0; i < times; i++) {
      await new Promise((res, rej) => {
        setTimeout(() => {
          func.apply(null, arg);
          res(); // 异步定时任务完成后，才将当前Promise任务状态设为成功，才会执行下一个Promise
        }, wait);
      });
    }
  };
}

const repeating = repeat(console.log, 4, 3000);
repeating("hello,world");
