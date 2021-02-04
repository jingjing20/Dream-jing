/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
	const res = [];

	const dfs = (index, list) => {
		if (index == nums.length) {
			// 指针越界
			res.push(list.slice()); // 把list的拷贝加入解集
			return; // 结束当前的递归
		}
		list.push(nums[index]); // 选择这个数
		dfs(index + 1, list); // 基于该选择，继续往下递归，考察下一个数
		list.pop(); // 上面的递归结束，撤销该选择
		dfs(index + 1, list); // 不选这个数，继续往下递归，考察下一个数
	};

	dfs(0, []);
	return res;
};

let nums = [1, 2, 3];
console.log(subsets(nums)); //jing-log

// 为什么要用 list.slice()，不能直接把 list 加入res ？
// 因为所有的操作都是对传入的那个空数组进行，不能只是把它的引用push到res数组里面，那么res数组里面的这些数组会跟着变化，要把他的拷贝推入res
