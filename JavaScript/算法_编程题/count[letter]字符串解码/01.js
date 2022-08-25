// * 3[a]2[bc] 这样的字符串，解码成 aaabcbc 这样的格式
// * 3[a],代表有3个a，即字符串 aaa

const str = `3[a]2[bc]`;

let arr1 = str.match(/[1-9][0-9]*\[[a-zA-Z]+\]/g);

console.log(arr1);
let result = "";

arr1.map((item) => {
  const arr2 = item.slice(0, item.length - 1).split("[");
  // console.log(arr2);

  for (i = 1; i <= +arr2[0]; i++) {
    result += arr2[1];
  }
});

console.log(result);
