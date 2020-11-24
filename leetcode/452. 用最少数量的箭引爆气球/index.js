/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (!points.length) return 0;
    let count = 1;
    points.sort((a, b) => a[1] - b[1]);
    let pos = points[0][1];
    for (let arr of points) {
        if (arr[0] > pos) {
            count++;
            pos = arr[1];
        }
    }
    return count;
};
