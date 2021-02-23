/**
  * @description: 广度优先搜索
  */

/**
  * 广度优先搜索是一种用于图的查找算法，可帮助回答两类问题
  * 第一类问题：从节点A出发，有前往节点B的路径吗？
  * 第二类问题：从节点A出发，前往节点B的哪条路径最短？
  */

/**
  * 目标是在你的人际关系网中找到一位芒果销售商
  * 因此，如果Alice不是芒果销售商，就将其朋友也加入到名单中
  * 这意味着你将在她的朋友、朋友的朋友等中查找
  * 使用这种算法将搜遍你的整个人际关系网，直到找到芒果销售商
  * 这就是广度优先搜索算法
  */

/**
  * 实现图
  * Anuj、Peggy、Thom和Jonny都没有邻居，这是因为虽然有指向他们的箭头，但没有从他们出发指向其他人的箭头。这被称为有向图（directed graph），其中的关系是单向的
  * 无向图（undirected graph）没有箭头，直接相连的节点互为邻居 graph["alice"] = ["peggy"], graph["peggy"] = ["alice"]
  */
let graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

/**
  * 概述一下广度优先搜索算法的工作原理
  * 1.创建一个队列，用于存储要检查的人
  * 2.从队列中弹出一个人
  * 3.检查这个人是否符合
  * 4.a.是----大功告成
    4.b.否----将这个人的所有邻居都加入队列
  * 5.回到第2步
  * 6.如果队列为空，就说明你的人际关系网中没有符合的
  */

/**
  * @author: 蔡忠继
  * @description: 广度优先搜索函数
  * @param {string} name 人名
  * @param {object} graph 图表
  * @return {boolean}
  */
function search(name, graph) {
  const search_queue = [] // 创建一个队列
  graph[name].forEach(item => search_queue.push(item)) // 将你的邻居都加入到这个搜索队列中
  // 检查一个人之前，要确认之前没检查过他，这很重要
  // 检查完一个人后，应将其标记为已检查，且不再检查他
  // 如果不这样做，就可能会导致无限循环 graph["you"] = graph["peggy"], graph["peggy"] = graph["you"]
  const searched = [] // 这个数组用于记录检查过的人
  let bool = false
  function recursion() {
    if (search_queue.length > 0) { // 只要队列不为空
      const person = search_queue.shift() // 就取出其中的第一个人
      if (!searched.includes(person)) { // 仅当这个人没检查过时才检查
        if (person_is_seller(person)) { // 检查这个人是否是芒果销售商
          console.log(person + " is a mango seller!") // 是芒果销售商
          bool = true
        } else {
          graph[person].forEach(item => search_queue.push(item))
          searched.push(person) // 将这个人标记为检查过
        }
      }
      recursion() // 递归
      return bool
    } else {
      return false
    }
  }
  // console.log(recursion())
  return recursion()
}

/**
  * @author: 蔡忠继
  * @description: 判断一个人是不是芒果销售商，检查人的姓名是否以m结尾
  * @param {string}
  * @return {boolean}
  */
function person_is_seller(name) {
  return name.slice(-1) == 'm'
}


console.log(search("you", graph))