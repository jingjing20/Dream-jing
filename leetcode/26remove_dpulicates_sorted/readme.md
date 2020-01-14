# leetcode 26题
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

- 解题思路
    给出的是一个已经排好序的数组 所以我们可以采用双指针法 
    即快慢指针 两个指针都从0开始 快指针先走 如果快指针指向的值和慢指针指向的不一样
    则慢指针加一 同时把当前快指针的值赋给慢指针 然后快指针继续向前走 一直把数遍历完

- 数据结构 链表 [1,1,2] 链表 LinkedList next 指向1 改成指向2
    把数组要维持位置 快慢指针好理解的多