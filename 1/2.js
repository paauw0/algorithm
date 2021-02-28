/**
  * @description: 选择排序
  */

/**
  * 每次检查数组的每个元素
  * 找到想要的元素放入新数组
  * 第一次需要检查n个元素
  * 随后需要检查的元素依次为n-1,n-2,...,2,1
  * 平均每次检查的元素数为1/2 * n
  * 因此运行时间为O(n * 1/2 * n)
  * 但大O表示法法省略诸如1/2这样的常数
  * 因此简单地写作O(n * n)
  */

/**
  * @description: 找出数组中最小元素的函数
  * @param {array} arr 数组
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
  * @description: 对数组进行排序
  * @param {array} arr 数组
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
