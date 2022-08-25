console.log(1);

async function async1() {
  await async2();
  console.log(2);
}

async function async2() {
  console.log(3);
}
async1();

setTimeout(function () {
  console.log(4);
}, 0);

new Promise((resolve) => {
  console.log(5);
  resolve();
})
  .then(function () {
    console.log(6);
  })
  .then(function () {
    console.log(7);
  });

console.log(8);
// 1 3 5 8 2 6 7 4
