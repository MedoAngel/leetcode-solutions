const lengthOfLongestSubstring = function (string) {
  let longest = 0;
  let left = 0;
  let right = 0;
  const windowChars = new Map();

  while (right < string.length) {
    if (windowChars.has(string[right])) {
      windowChars.delete(string[left]);
      left++;
      continue;
    }

    windowChars.set(string[right], true);
    if (windowChars.size > longest) longest = windowChars.size;
    right++;
  }

  return longest;
};