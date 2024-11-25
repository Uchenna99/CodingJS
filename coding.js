function fizzArray2(n){
    result = [];
    for(i=0; i<n; i++){
        result.push(i)
    }
    return result;
}
console.log(fizzArray2(10));



function mirrorEnds(str) {
    let mirror = "";
    let length = str.length;
    
    for (let i = 0; i < length; i++) {
        if (str[i] === str[length - 1 - i]) {
            mirror += str[i];
        } else {
            break;
        }
    }
    
    return mirror;
}
console.log(mirrorEnds('aba'));




function gHappy(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'g') {
            if (str[i - 1] !== 'g' && str[i + 1] !== 'g') {
                return false;
            }
        }
    }
    return true;
}
console.log(gHappy('xxggyygxx'));




// Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number. Note that a length-0 array is valid. Examples fizzArray3(5, 10) → 5,6,7,8,9 fizzArray3(11, 18) → 11,12,13,14,15,16,17 fizzArray3(1, 3) → 1,2

function fizzArray3(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}
console.log(fizzArray3(5, 10));



// solve with javascript Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1. Examples countEvens([2, 1, 2, 3, 4]) → 3 countEvens([2, 2, 0]) → 3 countEvens([1, 3, 5]) → 0
function countEvens(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvens([2, 1, 2, 3, 4]));




// Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

// Examples

// bigDiff([10, 3, 5, 6]) → 7
// bigDiff([7, 2, 10, 9]) → 8
// bigDiff([2, 10, 7, 2]) → 8

function bigDiff(arr) {
    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);
    
    return maxVal - minVal;
}
