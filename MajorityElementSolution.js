/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    const l = nums.length;
  };