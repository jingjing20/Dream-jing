/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function (arr, k) {
    let missCount = 0, lastMiss = -1, current = 1, ptr = 0;
    for (missCount = 0; missCount < k; ++current) {
        if (current == arr[ptr]) {
            ptr = (ptr + 1 < arr.length) ? ptr + 1 : ptr;
        } else {
            ++missCount;
            lastMiss = current;
        }
    }
    return lastMiss;
};

console.log(findKthPositive([2, 4, 6, 8], 2));

