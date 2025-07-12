const updatePreference = (inputString, userIndex, prefKey, newValue) => {
    const parseinput = (inputString) => {
        const result = [];
            let key = "", activeMap = result, i = 0;
            while (i < inputString.length) {
                let colPos = inputString.indexOf(':', i),
                    delimiter = inputString.indexOf(';', colPos),
                    bracePos = inputString.indexOf('}', delimiter),
                    endPos = Math.max(bracePos === -1 ? Infinity : bracePos, delimiter === -1 ? Infinity : delimiter,),
                    value = inputString.substring(colPos + 1, endPos + 1);
                key = inputString.substring(i, colPos);
                activeMap[key] = parseStringToObj(value);
                i = endPos + 2;//increment by 2 because of the semicolin after the }        
            }
            return result
        },
        parseStringToObj = (str) => {
            const res = {};
            let i = 0;
            while (i < str.length) {
                let equalPos = str.indexOf('=', i),
                    delimiter = str.indexOf(';', equalPos),
                    closeBracePos = str.indexOf('}', equalPos),
                    endPos = Math.min(delimiter === -1 ? Infinity : delimiter, closeBracePos === -1 ? Infinity : closeBracePos),
                    key = str.substring(i, equalPos),
                    val = str.substring(equalPos + 1, endPos);
                if (val.includes("{")) {
                    let startBrace = str.indexOf('{', equalPos);
                    val = str.substring(startBrace + 1, closeBracePos);
                    res[key] = parseStringToObj(val);
                    i = closeBracePos + 1;
                } else {
                    res[key] = val;
                    i = endPos !== Infinity ? endPos + 1 : str.length;
                }
            }
            return res;
        },
        updateArrObject = (obj, key, val) => { 
            if (obj.hasOwnProperty(key)){
                obj[key] = val;
                return obj;
            }            
            for(let innerMap of Object.values(obj)) {
                if (typeof innerMap === 'object' && innerMap !== null) 
                    return updateArrObject(innerMap, key, val);
                
            }
            return obj

        };    
    let res = parseinput(inputString);
    const indexObj = res['User' + userIndex];
    updateArrObject(indexObj, prefKey, newValue);
    
    return res;
}

// Example usage
let input = "User1:Age1=21;Location1=USA;Preferences1={Food1=Italian;Sport1=Fencing};User2:Age2=30;Location2=Canada;Preferences2={Music2=Jazz;Color2=Blue}";
let userIndex = 1;
let prefKey = "Sport1";
let newValue = "Hockey";
let updatedPreferences = updatePreference(input, userIndex, prefKey, newValue);
console.log(updatedPreferences);









//output 
// [
//     "User1": {
//         "Age1": "21",
//         "Location1": "USA",
//         "Preferences1": {
//             "Food1": "Italian",
//             "Sport1": "Hockey"
//         }
//     },
//     "User2": {
//         "Age2": "30",
//         "Location2": "Canada",
//         "Preferences2": {
//             "Music2": "Jazz",
//             "Color2": "Blue"
//         }
//     }
// ]