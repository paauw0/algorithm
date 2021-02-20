/**
  * @author: 蔡忠继
  * @description: 选择排序
  */

/**
  * @author: 蔡忠继
  * @description: 找出数组中最小元素的函数
  * @param {Array} arr 数组
  */
function findSmallest(arr) {
  let smallest = arr[0] // 存储最小的值
  let smallest_index = 0 // 存储最小元素的索引
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallest_index = i
    }
  }
  return smallest_index
}

/**
  * @author: 蔡忠继
  * @description: 对数组进行排序
  * @param {Array} arr 数组
  */
function selectionSort(arr) {
  let newArr = []
  let smallest_index
  let smallest
  let arrLen = arr.length
  for (let i = 0; i < arrLen; i++) {
    smallest_index = findSmallest(arr) // 找出数组中最小的元素的索引
    smallest = arr.splice(smallest_index, 1)[0] // 找出数组中最小的元素
    newArr.push(smallest) // 将其加入到新数组中
  }
  return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]))
