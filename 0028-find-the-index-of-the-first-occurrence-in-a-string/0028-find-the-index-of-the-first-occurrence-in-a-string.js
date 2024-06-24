/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) return -1;
    
    let left = 0;
    let right = needle.length-1;


    while(right < haystack.length){
        const window = haystack.slice(left,right+1)

        if(window === needle) return left;

        left++;
        right++;
    }

    return -1;
};