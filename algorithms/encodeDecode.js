class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let sizes = [], res = "";
        for (let s of strs) {
            sizes.push(s.length);
        }
        for (let sz of sizes) {
            res += sz + ',';
        }
        res += '#';
        for (let s of strs) {
            res += s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        let sizes = [], res = [], i = 0;
        while (str[i] !== '#') {
            let cur = "";
            while (str[i] !== ',') {
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur));
            i++;
        }
        i++;
        for (let sz of sizes) {
            res.push(str.substr(i, sz));
            i += sz;
        }
        return res;
    }
}

const sol = new Solution();


console.log({
    enc: sol.encode(["neet", "code", "love", "you"]),
    dec: sol.decode(sol.encode(["neet", "code", "love", "you"])),
    enc2: sol.encode([""]),
    dec2: sol.decode(sol.encode([""]))

})


