// Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
// Examples
// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
function maxSpan(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, the span is 0.
    }
    var maxSpan = 1; // Initialize the maximum span to 1 (for arrays with at least one element).
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length - 1; j >= i; j--) {
            if (nums[i] === nums[j]) {
                var span = j - i + 1; // Calculate the span.
                if (span > maxSpan) {
                    maxSpan = span; // Update the maximum span if the current span is larger.
                }
                break; // No need to check further; we found the farthest matching element for nums[i].
            }
        }
    }
    return maxSpan;
}
console.log(maxSpan([1, 2, 1, 1, 3]));
