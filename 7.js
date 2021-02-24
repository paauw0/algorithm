/**
  * @description: 狄克斯特拉算法
  */

/**
  * 狄克斯特拉算法包含4个步骤
  * (1) 找出“最便宜”的节点，即可在最短时间内到达的节点
  * (2) 对于该节点的邻居，检查是否有前往它们的更短路径，如果有，就更新其开销
  * (3) 重复这个过程，直到对图中的每个节点都这样做了
  * (4) 计算最终路径
  */

/**
  * 狄克斯特拉算法用于每条边都有关联数字的图，这些数字称为权重（weight）
  * 带权重的图称为加权图（weighted graph），不带权重的图称为非加权图（unweighted graph）
  * 要计算非加权图中的最短路径，可使用广度优先搜索。要计算加权图中的最短路径，可使用狄克斯特拉算法。
  */

/**
  * 环
  * 图还可能有环
  * 这意味着你可从一个节点出发，走一圈后又回到这个节点
  * 无向图意味着两个节点彼此指向对方，其实就是环
  * 在无向图中，每条边都是一个环

  * 狄克斯特拉算法只适用于有向无环图（directed acyclicgraph，DAG）。
  */

/**
  * 狄克斯特拉算法背后的关键理念：找出图中最便宜的节点，并确保没有到该节点的更便宜的路径！
  */

/**
  * 如果有负权边，就不能使用狄克斯特拉算法。因为负权边会导致这种算法不管用
  * 这是因为狄克斯特拉算法这样假设：对于处理过的海报节点，没有前往该节点的更短路径。这种假设仅在没有负权边时才成立
  * 因此，不能将狄克斯特拉算法用于包含负权边的图。
  * 在包含负权边的图中，要找出最短路径，可使用另一种算法——贝尔曼-福德算法（Bellman-Fordalgorithm）
  */

// 这里需要同时存储邻居和前往邻居的开销
const graph = {}
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2

graph["a"] = {}
graph["a"]["fin"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5

graph["fin"] = {} // 终点没有任何邻居
// console.log(Object.keys(graph["start"])) // 要获取起点的所有邻居，可像这样做

// 接下来，需要用一个散列表来存储每个节点的开销。
// 节点的开销指的是从起点出发前往该节点需要多长时间。
// 你不知道到终点需要多长时间。对于还不知道的开销，你将其设置为无穷大。
const infinity = Number.POSITIVE_INFINITY
const costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

// 还需要一个存储父节点的散列表
const parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = null

// 最后，你需要一个数组，用于记录处理过的节点，因为对于同一个节点，你不用处理多次。
const processed = []

/**
  * @description: 狄克斯特拉算法函数
  */
function findLowestCost() {
  const node = find_lowest_cost_node(costs) // 在未处理的节点中找出开销最小的节点
  while (!node) { // 这个while循环在所有节点都被处理过后结束
    const costs = costs[node] // 开销最小的节点的开销
    const neighbors = graph[node] // neighbors是一个散列表，开销最小的节点的邻居
    Object.keys(neighbors).forEach(key => {
      new_cost = cost + neighbors[key]
      if (cost[key] > new_cost) { // 如果经当前节点前往该邻居更近
        cost[key] = new_cost // 就更新该邻居的开销
        parents[n] = node // 同时将该邻居的父节点设置为当前节点
      }
    })
    processed.push(node) // 将当前节点标记为处理过
    node = find_lowest_cost_node(costs) // 找出接下来要处理的节点，并循环
  }
  // 计算最终路径
  // ...
}

/**
  * @description: 函数find_lowest_cost_node找出开销最低的节点
  * @param {number}
  * @return {void}
  */
function find_lowest_cost_node(costs) {
  let lowest_cost = infinity
  let lowest_cost_node = null
  Object.keys(costs).forEach(node => { // 遍历所有的节点
    const cost = costs[node]
    if ((cost < lowest_cost) && !processed.includes(node)) { // 如果当前节点的开销更低且未处理过
      lowest_cost = cost // 就将其视为开销最低的节点
      lowest_cost_node = node
    }
  })
  return lowest_cost_node
}

console.log(findLowestCost())
