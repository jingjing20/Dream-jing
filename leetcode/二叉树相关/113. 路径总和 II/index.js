const root = require('../bt');
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let pathSum = 0;
    let res = [];
    const dfs = (root, path) => {
        if (!root) return;
        path.push(root.val); // 把当前节点的值加入路径中
        pathSum += root.val; // 相应的也要把当前路径和更新
        if (!root.left && !root.right && pathSum === targetSum) {
            // 因为我们在递归函数的最后面执行了回溯操作
            // 在递归函数从下往上返回的时候会把 path 清空
            // 所以这里不浅拷贝的话会导致最后返回的结果受到影响（引用类型）
            res.push(path.slice());
        }
        dfs(root.left, path);
        dfs(root.right, path);
		// dfs 函数每次执行完成后更新 path 和 pathSum 的值
        path.pop();
        pathSum -= root.val;
    };
    dfs(root, []);
    return res;
};

console.log(pathSum(root, 22)); //jing-log
