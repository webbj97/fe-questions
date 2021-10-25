/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let mid = parseInt((left + right) / 2); //注意js里面需要转化为整数！
        if (numbers[mid] < numbers[right]) {
            // 如果mid < right，证明是单调递增的，拐点在左侧，注意，拐点可能在mid，所以不能mid+1
            right = mid;
        } else if (numbers[mid] > numbers[right]) {
            // 如果mid > right，单调性被破坏，证明拐点在右侧
            left = mid + 1;
        } else { 
            // 如果相等，分辨不出来，删除一位不会影响最终结果
            right--;
        }
    }
    return numbers[left]
};