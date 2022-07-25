function versionComparison(version1, version2) {
  let arr1 = version1.split(".");
  let arr2 = version2.split(".");
  let result = null;

  for (let i = 0; i < arr1.length; i++) {
    let val = +arr1[i] - +arr2[i];
    if (val > 0) {
      return 1;
    } else if (val < 0) {
      return -1;
    } else {
      result = 0;
    }
  }

  // number + +undefined 结果为 NaN，result结果为0
  if (arr1.length > arr2.length && result === 0) {
    result = 1;
  }

  // 遍历时，默认没有考虑arr2长度大于arr1
  if (arr1.length < arr2.length && +arr2[arr2.length - 1] > 0) {
    result = 1;
  }

  return result;
}

console.log(versionComparison("001.23.22", "1.23.22.4")); // 1
console.log(versionComparison("001.23.22", "2.23.22.4")); // -1
console.log(versionComparison("001.23.22", "1.22.22.0")); // 1
console.log(versionComparison("000.23.22", "1.23.22.4")); // -1
console.log(versionComparison("001.23.22.4", "1.23.22.4")); // 0
console.log(versionComparison("001.23.22.4", "1.23.22")); // 1
