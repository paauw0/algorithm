class Tree {
  constructor(root) {
    this.root = new TreeNode(root)
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new Tree(3)

tree.root.left = new TreeNode(9)
tree.root.right = new TreeNode(20)

tree.root.right.left = new TreeNode(15)
tree.root.right.right = new TreeNode(7)


var maxDepth = function (root) {
    debugger
    if (root === null) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


console.log(maxDepth(tree.root))