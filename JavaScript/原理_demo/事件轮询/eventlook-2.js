setTimeout(() => {
  console.log(4);
},0)

console.log(1);

let p1 = new Promise(function (resolve,reject) {
  console.log(2);
  resolve();
})

p1.then(()=> {
  console.log(3);
})

