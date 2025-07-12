var groupAnagrams = function (strs) {
    const map = {};
    for (let s of strs) {
        const sortedS = s.split('').sort().join('');
        if (!map[sortedS]) {
            map[sortedS] = [];
        }
        map[sortedS].push(s);
    }
    return Object.values(map);
};

groupAnagrams(['cat', 'car', 'tac', 'bat', 'tab']);





var groupAnagrams2 = function (strs) {
    const map =  { };
    for (s of strs) {
        const sortedS = s.split('').sort().join('');
        console.log(sortedS, s.split(''), s.split('').sort(), s.split('').sort().join('')  )
    }
};

groupAnagrams2(['cat', 'car', 'tac', 'bat', 'tab']);