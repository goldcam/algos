var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const map1 = {}, map2 = {};

    for (let i of s) {
        map1[i] = (map1[i] || 0) + 1;
    }

    for (let j of t) {
        map2[j] = (map2[j] || 0) + 1;
    }

    for (let i in map1) {
        if (!i in map2) return false;
        if (map1[i] !== map2[i]) return false;
    }

    return true;

};

const test = isAnagram('catt', 'ttac');
const test2 = isAnagram('cato', 'ttac');





const isAnagram2 = (s, t) => {
    const st1 = s.toLowerCase().replace(/[\W]/g, ""),
        st2 = t.toLowerCase().replace(/[\W]/g, "");          
    if (st1.length !== st2.length) return false;

    const charMap = str => {
        const map = {};
        for (let i of str) {
            map[i] = ++map[i] || 1;
        }
        return map;
    },
        map1 = charMap(st1), 
        map2 = charMap(st2);

    for(let i in map1) {
        if (!i in map2) return false;
        if (map1[i] !== map2[i]) return false;
    }

    return true;
}


const isAnagram3 = (str1, str2) => {
    const helper = str => str.toLowerCase()
                              .replace(/[\W]/g, "")
                              .split('')
                              .sort()
                              .join('');
    
    return helper(str1) === helper(str2);
};

const test3 = isAnagram2('pig', 'gip');
const test4 = isAnagram2('PIG Money!', 'Moneypig');
const test5 = isAnagram3('oh OH ho', 'ho ho ho');

console.log({ test, test2, test3, test5 });

