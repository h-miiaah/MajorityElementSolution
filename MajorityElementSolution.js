/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    const l = nums.length;

    if (l % 2 === 0) {
        return nums[l / 2]
      } else {
        return nums[(l - 1) / 2]
      }
  };

/*

- Sort the array in ascending order.
- If the array length is odd, return the middle element.
- If the array length is even, return the average of the middle two elements.

*/