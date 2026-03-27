// akhane 30 ta problem ache

//*************/ Problem: 1 Given a string, reverse it.
// Input: "hello"
// Expected Output: "olleh"

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

// *********** Problem: 2 Check if a string is a palindrome
// Input: "madam"
// Expected Output: true

function isPalindrome(str) {
    // TODO: write your logic here
}

console.log(isPalindrome("madam")); // true

// *********** Problem: 3 Find the largest number in an array
// Input: [3, 7, 2, 9, 4]
// Expected Output: 9

function findLargest(arr) {
    // TODO: write your logic here
}

console.log(findLargest([3, 7, 2, 9, 4])); // 9


// *********** Problem: 4 Find the smallest number in an array
// Input: [5, 1, 8, 3]
// Expected Output: 1

function findSmallest(arr) {
    // TODO: write your logic here
}

console.log(findSmallest([5, 1, 8, 3])); // 1

// *********** Problem: 5 Calculate the sum of all numbers in an array
// Input: [1, 2, 3, 4]
// Expected Output: 10

function sumArray(arr) {
    // TODO: write your logic here
}

console.log(sumArray([1, 2, 3, 4])); // 10

// *********** Problem: 6 Implement a debounce function

// Expected: Function executes after delay

function debounce(fn, delay) {
    // TODO
}

// Example usage
// const debouncedFn = debounce(() => console.log("Hello"), 500);

// *********** Problem: 7 
// Problem: Implement a debounce function
// Expected: Function executes after delay

function debounce(fn, delay) {
    // TODO
}

// Example usage
// const debouncedFn = debounce(() => console.log("Hello"), 500);

// *********** Problem: 8
// Input: "test@email.com"
// Expected Output: true

function validateEmail(email) {
    // TODO
}

console.log(validateEmail("test@email.com")); // true

// *********** Problem: 9 
// Input: [1,1,2,3,3,4]
// Expected Output: [2,4]

function findUnique(arr) {
    // TODO
}

console.log(findUnique([1,1,2,3,3,4]));

// *********** Problem: 10

// Input: "Hello world from JavaScript"
// Expected Output: 4

function countWords(str) {
    return str.split(" ").length;
}

console.log(countWords("Hello world from JavaScript"));


// *********** Problem: 11
// Input: "JavaScript"
// Expected Output: { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

function countCharacterFrequency(str) {
    const frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

console.log(countCharacterFrequency("JavaScript"));

// *********** Problem: 12
// Input: "IV"
// Expected Output: 4


// roman numeral to integer conversion

var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currentVal = romanValues[s[i]];
        let nextVal = romanValues[s[i + 1]];

        if (nextVal > currentVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
};

// *********** Problem: 13
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // দুটি দেয়ালের মধ্যে ছোট উচ্চতাটি নিতে হবে
        let currentHeight = Math.min(height[left], height[right]);
        
        // বর্তমান চওড়া বা দূরত্ব
        let width = right - left;
        
        // এরিয়া হিসাব করা
        let currentArea = currentHeight * width;
        
        // যদি বর্তমান এরিয়া আগের সর্বোচ্চ এরিয়ার চেয়ে বড় হয়
        maxArea = Math.max(maxArea, currentArea);

        // যে দেয়ালটি ছোট, সেটিকে সরাবো
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
