// 可见，此方法不仅能够完整的还原出a对象，还能还原出a对象arr数组里边的b对象。
// 注意：在使用过程中，如果b对象持有a对象的引用，将形成闭环，会导致序列化失败
function serialize(obj, name) {
  var result = "";

  function serializeInternal(o, path) {
    for (p in o) {
      var value = o[p];

      if (typeof value != "object") {
        if (typeof value == "string") {
          result +=
            "\n" +
            path +
            "[" +
            (isNaN(p) ? '"' + p + '"' : p) +
            "] = " +
            '"' +
            value.replace(/\"/g, '\\"') +
            '"' +
            ";";
        } else {
          result +=
            "\n" +
            path +
            "[" +
            (isNaN(p) ? '"' + p + '"' : p) +
            "] = " +
            value +
            ";";
        }
      } else {
        if (Array.isArray(value)) {
          result +=
            "\n" +
            path +
            "[" +
            (isNaN(p) ? '"' + p + '"' : p) +
            "]" +
            "=" +
            "new Array();";

          serializeInternal(
            value,
            path + "[" + (isNaN(p) ? '"' + p + '"' : p) + "]"
          );
        } else {
          result +=
            "\n" +
            path +
            "[" +
            (isNaN(p) ? '"' + p + '"' : p) +
            "]" +
            "=" +
            "new Object();";

          serializeInternal(
            value,
            path + "[" + (isNaN(p) ? '"' + p + '"' : p) + "]"
          );
        }
      }
    }
  }

  serializeInternal(obj, name);

  return result;
}

function A() {
  this.name = "A";
  this.arr = new Array();
  this.put = function (para) {
    this.arr[this.arr.length] = para;
  };
}

function B() {
  this.name = "B";
  this.show = "";
}

var a = new A();
var b1 = new B();

b1.show = function () {
  alert("function 1");
};

var b2 = new B();

b2.show = function () {
  alert("function 2");
};

a.put(b1);

a.put(b2);

console.log(JSON.stringify(a));
let str = serialize(a, "a");
console.log(str);
let obj = eval(str);

console.log(obj);