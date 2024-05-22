//Решение за O(n) по сложности и O(n) по памяти

function missingElement(nums, k) {
    let l = 0;
    let r = nums.length;
    let m;

    const missingLeft = (i) => nums[i] - nums[0] - i;

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (missingLeft(m) >= k) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return nums[l - 1] + k - missingLeft(l - 1);
}

module.exports = missingElement;
