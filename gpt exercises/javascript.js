function reverseString(str) {
    var res = "";
    var length = str.length;
    for (var i = length; i >= 0; i --) {
        res += str[i]
    }

    return res;
}

function countVowels(str) {
    const vowels = ['a','e','i','o','u'];
    var numOfVowels = 0;
    var length = str.length;

    for (var i=0; i < length; i ++) {
        if (vowels.includes(str[i])) {
            numOfVowels ++
        }
    }

    return numOfVowels;
}

function findEvenNumbers(arr) {
    var resArray = [];
    for (const num of arr) {
        if (num % 2 == 0) {
            resArray.push(num);
        }
    }

    return resArray;
}

function palindromeChecker(word) {
    const reverse = reverseString(word);
    return reverse == word;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function manipulation() {
    var creator = document.createElement('button');
    creator.addEventListener(onclick, function() {
        creator.style.backgroundColor=getRandomColor();
    })
}