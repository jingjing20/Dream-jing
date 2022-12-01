const root = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null,
        },
    },
    right: {
        val: 4,
        left: null,
        right: null,
    },
};
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    const res = [];
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.right;
        }
        const node = stack.pop();
        res.push(node.val);
        if (res.length === k) {
            return node.val;
        }
        p = node.left;
    }
};
console.log(kthLargest(root, 2), '--'); //jing-log
