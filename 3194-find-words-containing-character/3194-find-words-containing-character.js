/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const result = [];

    for(let index in words){
        const word = words[index];

        for(let char of word) {
            if(char === x){
                result.push(index);
                break;
            }
        }
    }
    
    return result;
};