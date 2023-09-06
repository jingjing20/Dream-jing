// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
// 	let map = new Map();
// 	for (let i in nums) {
// 		map.set(nums[i], i);
// 	}
// 	for (let j = 0; j < nums.length - 1; j++) {
// 		if (map.has(target - nums[j]) && map.get(target - nums[j]) != j) {
// 			return [j, parseInt(map.get(target - nums[j]))];
// 		}
// 	}
// };
// console.time();
// console.log(twoSum([2, 7, 11, 15], 22));
// console.timeEnd();


function twoSum(nums, target) {
    // 创建一个哈希表，用于存储元素和索引的映射
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        // 计算目标值与当前元素的差值
        const complement = target - nums[i];

        // 检查差值是否存在于哈希表中
        if (numMap.has(complement)) {
            // 如果存在，返回差值的索引和当前元素的索引
            return [numMap.get(complement), i];
        }

        // 如果差值不存在于哈希表中，将当前元素及其索引添加到哈希表中
        numMap.set(nums[i], i);
    }

    // 如果没有找到符合条件的两个数，返回一个空数组或抛出异常，根据题目要求而定
    return [];
}

console.time();
console.log(twoSum([2, 7, 11, 15], 22));
console.timeEnd();