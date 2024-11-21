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




