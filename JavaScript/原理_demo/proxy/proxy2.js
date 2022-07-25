const objParent = {
  name: "parent",
  fn1() {
    console.log(this.name);
  },
};
const objSon = {
  name: "son",
  // [Symbol.toStringTag]: "myson",
  // splice: "",
};

const proxy = new Proxy(objParent, {
  get(target, key, receiver) {
    console.log('getter',key);
    // console.log(receiver); //溢出

    // return target.key; //undefined
    // let res = Reflect.get(target, key);
    // return res;
    // return Reflect.get(receiver, key); //溢出
    return target[key];
  },

  set(target, key, value, receiver) {
    console.log("setter");
    return (target[key] = value);
  },
});
Object.setPrototypeOf(objSon, proxy); //设置原型链

console.log(objSon);

// objParent.name = 10;
// proxy.name = 10;
// console.log(objParent.name);
// console.log(proxy.fn1());
