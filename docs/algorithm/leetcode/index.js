// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = [];
    let i = 0;
    let len = 0;
    while (i < s.length) {
        const cur = s[i];
        const findI = res.findIndex((v) => v === cur);

        if (findI === -1) {
            res.push(cur);
        } else if (findI === 0) {
            res.push(res.shift());
        } else {
            res = res.slice(findI + 1);
            res.push(cur);
        }
        // max
        len = Math.max(len, res.length);
        i++;
    }
    return len;
};

var lengthOfLongestSubstring1 = function(s) {
    let i = 0,
        j = 0;
    let ans = 0;
    const map = {};
    while (i < s.length && j < s.length) {
        if (!map[s[j]]) {
            ans = Math.max(j - i + 1, ans);
            map[s[j]] = true;
            ++j;
        } else {
            // 如果char重复，那么缩小滑动窗口，并更新对应的map
            map[s[i]] = false;
            ++i;
        }
    }
    return ans;
};

const res = lengthOfLongestSubstring1("pwwkew");
console.log("res:", res);
