//Решение за O(n) по сложности и O(n) по памяти

function missingElement(nums, k) {
    const n = nums.length;
    const prefix = [];

    prefix[0] = 0;
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + (nums[i] - nums[i - 1] - 1);
    }

    let l = 0;
    let r = n;
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (prefix[m] >= k) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return nums[l - 1] + k - prefix[l - 1];
}

module.exports = missingElement;
