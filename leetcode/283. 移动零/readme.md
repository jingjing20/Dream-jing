# 解法一【两次遍历】

## 思路

-   定义一个指针初始指向数组第一项，遍历数组
-   遍历到非 0 元素时，将其赋值给数组的指针位置，同时指针往后移一位
-   遍历完之后，将指针之后的数组元素都赋值为 0

## code

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
```

# 解法二【一次遍历】

## 思路

-   这里参考了快速排序的思想，快速排序首先要确定一个待分割的元素做中间点 x
-   然后把所有小于等于 x 的元素放到 x 的左边，大于 x 的元素放到其右边。
-   这里我们可以用 0 当做这个中间点，把不等于 0 的放到中间点的左边，等于 0 的放到其右边。
-   这的中间点就是 0 本身，所以实现起来比快速排序简单很多
-   我们使用两个指针 i 和 j，只要 nums[i]!=0，我们就交换 nums[i]和 nums[j]

## code

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            j++;
        }
    }
    return nums;
};
```

## 优化

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i > j) {
                // jing
                nums[j] = nums[i];
                nums[i] = 0;
            }
            j++;
        }
    }
    return nums;
};
```

-   其实优化的地方就是 `jing` 处。它避免了数组开头是非零元素的交换也就是阻止（i==j）时交换。
-   当 i > j 时，只需要把 i 的值赋值给 j 并把原位置的值置 0。
-   同时这里也把交换操作换成了赋值操作，减少了一条操作语句，理论上能更节省时间。
