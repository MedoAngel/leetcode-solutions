/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x < 0) return false;
   const string = String(x);

   for(let left=0,right=string.length-1;left<=right;left++,right--){
    if(string[left] != string[right]) return false;
   }

   return true;
};