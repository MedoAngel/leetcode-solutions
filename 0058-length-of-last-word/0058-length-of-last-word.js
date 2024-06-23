/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let gotFirstChar = false;
    let length = 0;

    for(let i = s.length-1;i>=0;i--){
        if(s[i] !== " ") length++;

        if(length && s[i] === " ") return length;
    }

    return length;
};