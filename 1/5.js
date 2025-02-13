/**
  * @description: 快速排序
  */

/**
  * 快速排序的基线条件
  * 基线条件为数组为空或只包含一个元素。
    在这种情况下，只需原样返回数组——根本就不用排序
  */

/**
  * @description: 快速排序函数----针对数组为空或只包含一个元素
  * @param {array} arr
  * @return {void | array}
  */
function quicksort_01(arr) {
  if (arr.length < 2) {
    return arr
  }
}

/**
  * 对包含两个元素的数组进行排序
  * 检查第一个元素是否比第二个元素小，如果不比第二个小，就交换他们的位置
  */

/**
  * @description: 快速排序函数----针对包含两个元素的数组进行排序
  * @param {array} arr
  * @return {void | array}
  */
function quicksort_2(arr) {
  if (arr.length < 2) {
    return arr
  } else if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]]
    }
  }
}

/**
  * 快速排序的工作原理
  * 对包含三个元素的数组进行排序 // [33, 15, 10]
  * 别忘了，你要使用D&C，因此需要将数组分解，直到满足基线条件
  * 首先，从数组中选择一个元素，这个元素被称为基准值（pivot）。暂时将数组的第一个元素用作基准值 // 33
  * 接下来，找出比基准值小的元素以及比基准值大的元素。这被称为分区（partitioning） // [15, 10]  33  []
  * 现在你有：一个由所有小于基准值的数字组成的子数组 + 基准值 + 一个由所有大于基准值的数组组成的子数组
  * 这里只是进行了分区，得到的两个子数组是无序的
  * 如何对子数组进行排序呢？对于包含两个元素的数组（左边的子数组）以及空数组（右边的子数组），
    快速排序知道如何将它们排序，
    因此只要对这两个子数组进行快速排序，再合并结果，就能得到一个有序数组！ // quicksort([15, 10]) + [33] + quicksort([]) ==> [10, 15, 33]
  * 不管将哪个元素用作基准值，这都管用
  */

/**
  * 对包含四个元素的数组 // [33, 10, 15, 7]
  * 假设你也将33用作基准值 // [10, 15, 7]  33  []
  * 左边的子数组包含三个元素，而你知道如何对包含三个元素的数组进行排序：对其递归地调用快速排序
  * 因此你能够对包含四个元素的数组进行排序
  * 如果能够对包含四个元素的数组进行排序，就能对包含五个元素的数组进行排序
  */

/**
  * 归纳证明
  * 归纳证明是一种证明算法行之有效的方式，它分两步：基线条件和归纳条件。
  * 例如，假设我要证明我能爬到梯子的最上面
  * 递归条件是这样的：如果我站在一个横档上，就能将脚放到下一个横档上
  * 换言之，如果我站在第二个横档上，就能爬到第三个横档。这就是归纳条件
  * 而基线条件是这样的，即我已经站在第一个横档上。因此，通过每次爬一个横档，我就能爬到梯子最顶端
  */

/**
  * 对于快速排序，可使用类似的推理
  * 在基线条件中，我证明这种算法对空数组或包含一个元素的数组管用
  * 在归纳条件中，我证明如果快速排序对包含一个元素的数组管用，对包含两个元素的数组也将管用；
  * 如果它对包含两个元素的数组管用，对包含三个元素的数组也将管用，以此类推
  * 因此，我可以说，快速排序对任何长度的数组都管用
  */

/**
  * @description: 快速排序函数
  * @param {array} arr
  * @return {void | array}
  */
function quicksort(arr) {
  if (arr.length < 2) {
    return arr // 基线条件：为空或只包含一个元素的数组是“有序”的
  } else {
    let pivot = arr[0] // 递归条件  !!!实现快速排序时，请随机地选择用作基准值的元素。快速排序的平均运行时间为O(n * log n)
    let less = []
    let greater = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        less.push(arr[i])
      } else {
        greater.push(arr[i])
      }
    }
    return [...quicksort(less), pivot, ...quicksort(greater)]
  }
}

console.log(quicksort([0, 10, 5, 2, 6, 1, 3]))
