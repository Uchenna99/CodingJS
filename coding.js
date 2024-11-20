function fizzArray2(n){
    result = [];
    for(i=0; i<n; i++){
        result.push(i)
    }
    return result;
}
console.log(fizzArray2(10));



function mirrorEnds(str){
    let start = 0;
    let end = str.length - 1;

    while (start <= end && str[start] === str[end]) {
        start++;
        end--;
    }
    return str.slice(0, start);
}


