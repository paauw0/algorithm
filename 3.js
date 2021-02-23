/**
  * @description: 递归
  */

/**
  * 编写涉及数组的递归函数时，基线条件通常是数组为空或只包含一个元素。陷入困境时，请检查基线条件是不是这样的
  */

/**
  * @description: 找出数组中最小元素的函数
  * @param {array} arr 数组
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