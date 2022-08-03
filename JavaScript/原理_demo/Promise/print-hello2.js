function repeat(func, times, wait) {
  return function (...arg) {
    let settime = null;
    let i = 0;

    settime = setInterval(() => {
      func.apply(null, arg);
      i++;
      if (i === times) {
        clearInterval(settime);
      }
    }, wait);
  };
}

const repeating = repeat(console.log, 4, 3000);
repeating("hello,world");
