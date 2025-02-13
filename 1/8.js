/**
  * @description: 贪婪算法
  */

/**
  * 贪婪算法很简单：每步都采取最优的做法。
  * 用专业术语说，就是你每步都选择局部最优解，最终得到的就是全局最优解。
  * 有时候，你只需找到一个能够大致解决问题的算法，此时贪婪算法正好可派上用场，因为它们实现起来很容易，得到的结果又与正确结果相当接近。
  */

/**
  * 假设你办了个广播节目，要让全美50个州的听众都收听得到。
  * 为此，你需要决定在哪些广播台播出。
  * 在每个广播台播出都需要支付费用，因此你力图在尽可能少的广播台播出。
  * 每个广播台都覆盖特定的区域，不同广播台的覆盖区域可能重叠。
  * 如何找出覆盖全美50个州的最小广播台集合呢？听起来很容易，但其实非常难。具体方法如下。
  * (1) 列出每个可能的广播台集合，这被称为幂集（power set）。可能的子集有2^n个。
  * (2) 在这些集合中，选出覆盖全美50个州的最小集合。
  * 问题是计算每个可能的广播台子集需要很长时间。由于可能的集合有2^n个，因此运行时间为O(2^n)。
  * 如果广播台不多，只有5～10个，这是可行的。但如果广播台很多，结果将如何呢？随着广播台的增多，需要的时间将激增。
  */

/**
  * 贪婪算法可化解危机！使用下面的贪婪算法可得到非常接近的解。
  * (1) 选出这样一个广播台，即它覆盖了最多的未覆盖州。即便这个广播台覆盖了一些已覆盖的州，也没有关系。
  * (2) 重复第一步，直到覆盖了所有的州。
  * 这是一种近似算法（approximation algorithm）。在获得精确解需要的时间太长时，可使用近似算法。
  * 判断近似算法优劣的标准如下：
  * (1) 速度有多快；
  * (2) 得到的近似解与最优解的接近程度。
  * 贪婪算法是不错的选择，它们不仅简单，而且通常运行速度很快。
  * 在这个例子中，贪婪算法的运行时间为O(n^2)，其中n为广播台数量。
  */

// 出于简化考虑，这里假设要覆盖的州没有那么多，广播台也没有那么多。
// 首先，创建一个列表，其中包含要覆盖的州。
// 集合类似于列表，只是同样的元素只能出现一次，即集合不能包含重复的元素。
let states_needed = [...new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])] // 你传入一个数组，它被转换为集合

// 还需要有可供选择的广播台清单，我选择使用散列表来表示它。其中的键为广播台的名称，值为广播台覆盖的州。
const stations = {}
stations["kone"] = [...new Set(["id", "nv", "ut"])]
stations["ktwo"] = [...new Set(["wa", "id", "mt"])]
stations["kthree"] = [...new Set(["or", "nv", "ca"])]
stations["kfour"] = [...new Set(["nv", "ut"])]
stations["kfive"] = [...new Set(["ca", "az"])]

// 最后，需要使用一个集合来存储最终选择的广播台。
const final_stations = []

while (states_needed.length > 0) {
  // 接下来需要计算要使用哪些广播台。正确的解可能有多个。
  // 你需要遍历所有的广播台，从中选择覆盖了最多的未覆盖州的广播台。
  // 我将这个广播台存储在best_station中。
  let best_station = null
  // states_covered是一个集合，包含该广播台覆盖的所有未覆盖的州。
  let states_covered = []
  // for循环迭代每个广播台，并确定它是否是最佳的广播台。
  for (station in stations) {
    const states_for_station = stations[station]
    // 下面的代码计算交集。
    // covered是一个集合，包含同时出现在states_needed和states_for_station中的州；
    // 换言之，它包含当前广播台覆盖的一系列还未覆盖的州！
    const covered = [...new Set([...states_needed].filter(x => states_for_station.includes(x)))]
    // 接下来，你检查该广播台覆盖的州是否比best_station多。
    if (covered.length > states_covered.length) {
      // 如果是这样的，就将best_station设置为当前广播台。
      best_station = station
      states_covered = covered
    }
  }
  // 你还需更新states_needed。由于该广播台覆盖了一些州，因此不用再覆盖这些州。
  states_needed = [...new Set([...states_needed].filter(x => !states_covered.includes(x)))]
  // 最后，你在for循环结束后将best_station添加到最终的广播台列表中。
  final_stations.push(best_station)
}

console.log(final_stations)


// 并集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]); // {1, 2, 3, 4}

// 交集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}

// 差集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}


/**
  * 如何识别 NP 完全问题
  * 没办法判断问题是不是NP完全问题，但还是有一些蛛丝马迹可循的。
  * 元素较少时算法的运行速度非常快，但随着元素数量的增加，速度会变得非常慢。
  * 涉及“所有组合”的问题通常是NP完全问题。
  * 不能将问题分成小问题，必须考虑各种可能的情况。这可能是NP完全问题。
  * 如果问题涉及序列（如旅行商问题中的城市序列）且难以解决，它可能就是NP完全问题。
  * 如果问题涉及集合（如广播台集合）且难以解决，它可能就是NP完全问题。
  * 如果问题可转换为集合覆盖问题或旅行商问题，那它肯定是NP完全问题。
  */
