function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    return num / 3
};

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    const sum = num1 + num2
    const avg = sum / 2
    return avg
};

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    const sum = num1 + num2 + num3 + num4
    const avg = sum / 4
    return avg
};

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    let dubArr = []
    for (let i = 0; i < nums.length; i++) {
        let oldArr = nums[i];
        let newArr = oldArr * 2
        dubArr.push(newArr)
    }
    return dubArr
};

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    let newArr = null
    newArr = arr1.concat(arr2)
    return newArr
};

function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    if (arr.indexOf(word) !== -1) {
        return true
    }
    return false
};

function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    let echos = `${str.toUpperCase()} ... ${str} ... ${str.toLowerCase()}`
    return echos
};

function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    let arr = []

    for (let i = 0; i < max; i++) {
        const num = i
        if (num % 3 === 0 && num % 5 !== 0) {
            arr.push(num)
        } else if (num % 5 === 0 && num % 3 !== 0) {
            arr.push(num)
        }
    }
    return arr
};

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    let greeting = `Hello, ${name}`
    return greeting
};

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    let farewell = `Bye, ${name}`
    return farewell
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    if (num === 5) {
        return true
    }
    return false
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    let odd = num % 2 !== 0
    return odd
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    let searchStr = searchString.toLowerCase()
    let subStr = subString.toLowerCase()

    let match = searchStr.indexOf(subStr) !== -1

    return match
};

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */

    let count = 0
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (char === 'a' || char === "A") {
            count++
        }
    }
    return count
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
