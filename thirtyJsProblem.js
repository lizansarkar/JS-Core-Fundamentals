// akhane 30 ta problem ache, jekhane JavaScript er type coercion er karone unexpected output ashte pare.
console.log(1 + "2");

let array = [1, [2, 3, [4, 5, 6], 7, 8], 9, 10];

function flattenArray(arr, result = []) {
    // loop চালানো হচ্ছে current array এর উপর
    for (let item of arr) {

        // যদি item একটা array হয়
        if (Array.isArray(item)) {

            // তাহলে recursive call করা হবে
            flattenArray(item, result);

        } else {
            // যদি normal value হয়, result array তে push করা হবে
            result.push(item);
        }
    }

    // সবশেষে flat array return করা হবে
    return result;
}

// function call
const result = flattenArray(array);

// output
console.log(result);

