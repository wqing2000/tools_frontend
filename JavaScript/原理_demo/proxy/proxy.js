class MyClass {
  constructor() {
    // ...
    this.prop = { foo: 1 };
  }
  get prop() {
    // return 'getter';

    console.log(1);
    // return this;
    // return target.key;
    return this.prop; // 返回属性的自身，会继续被get拦截，无限递归
  }
  set prop(value) {
    console.log("setter: " + value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

let x = inst.prop;
console.log(x);
// 'getter'
