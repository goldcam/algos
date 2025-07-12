var isPalindrome1 = function (x) {
    const str = x.toString();
    const rStr = str.split('').reverse().join("");
    return str === rStr ? true: false    
};

var isPalindrome = function (x) {
    if (x < 0) return false;
    let original = x, reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return original === reversed;
};

console.log(isPalindrome(121));


const isPalindromeString =  (s) =>  {
    const spaceRemoved = s.replace(/[^A-Z0-9]+/ig, '').toLowerCase();
    let rev = '';
    for (let i = spaceRemoved.length - 1; i >= 0; i--) {
        rev += spaceRemoved[i]
    }

    return rev === spaceRemoved ? true : false;
};
isPalindromeString('"A man, a plan, a canal: Panama"');


const isPalindrome2pointer = str => {
    if(str.length <= 1) return true;
    let l = 0, r = str.length -1;

    while(l < r) {
        if(str[l] !== str[r]) return false;
        l++;
        r--;
    }

    return true;
}
  

// isPalindrome2('racecar')
const moom = isPalindrome2pointer('moom');


const isPalindrome3 = str => {
    let rev = '';
    for(let s of str) {
        rev = s + rev;
    }
    return rev === str;
}

const isPalindrome4 = str => str === str.split('').reverse().join('');

const p3 = isPalindrome4('mom');
const p4 = isPalindrome4('dommod');
const p5 = isPalindrome4('stinkfish');

console.log({ p3, p4, p5, moom });