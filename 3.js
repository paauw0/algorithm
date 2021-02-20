/**
  * @author: 蔡忠继
  * @description: 递归
  */

/**
  * @author: 蔡忠继
  * @description: 找出数组中最小元素的函数
  * @param {Array} arr 数组
  */
function sum(arr) {
  if (arr && arr.length > 0) {
    const first = arr.shift()
    return first + sum(arr)
  } else {
    return 0
  }
}

console.log(sum([2, 4, 6]))