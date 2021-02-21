/**
  * @description: 二分查找
  */

/**
  * 仅当列表是有序的时候，二分查找才管用。例如，电话簿中的名字是按字母顺序排列的，因此可以使用二分查找来查找名字
  */

/**
  * @description: 函数binary_search接受一个有序数组和一个元素
  * @param {Array} arr 有序数组
  * @param {Any} item 元素
  */
function binary_search(arr, item) {
  // 跟踪要在其中查找的数组部分——开始时为整个数组
  let low = 0 // low和high用于跟踪要在其中查找的列表部分
  let high = arr.length - 1 // low和high用于跟踪要在其中查找的列表部分
  let mid, guess
  while (low <= high) { // 只要范围没有缩小到只包含一个元素
    mid = parseInt((low + high) / 2) // 每次都检查中间的元素
    guess = arr[mid]
    if (guess == item) { // 找到了元素
      return mid
    } else if (guess > item) { // 猜的数字大了
      high = mid - 1
    } else { // 猜的数字小了
      low = mid + 1
    }
  }
  return null // 没有指定的元素
}

const my_list = [1, 3, 5, 7, 9]

console.log(binary_search(my_list, 3)) // 1
console.log(binary_search(my_list, -1)) // null
