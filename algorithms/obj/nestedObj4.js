function solution(data, userId, key, newValue) {
    // TODO: Your solution
    const split = data.split('\n'),
        parseStringToObj = (str) => {           
            const res = {};
            let i = 0;
            while (i < str.length) {
                let equalPos = str.indexOf('=', i),
                    delimiter = str.indexOf(',', i),
                    endPos = Math.max(delimiter === -1 ? Infinity : delimiter, equalPos === -1 ? Infinity : equalPos),
                    closeBracePos = str.indexOf('}', equalPos),
                    key = str.substring(i, equalPos), 
                    val = str.substring(equalPos + 1, endPos);

                    if(equalPos > delimiter && equalPos === endPos) {                        
                        key = 'ID';
                        val  = str.substring(i, delimiter);
                        res[key] = val;
                        i = delimiter + 1
                    } 
                    else if (val.includes("{")) {
                        let startBrace = str.indexOf('{', equalPos);
                        endPos = Math.max(delimiter === -1 ? Infinity : delimiter, closeBracePos === -1 ? Infinity : closeBracePos),                        
                        val = str.substring(startBrace + 1, closeBracePos);
                        res[key] = parseStringToObj(val);                        
                        i = closeBracePos + 1;
                        if (i < str.length && str[i] === ',') {
                            i++; // Skip the ',' after '}'
                        }
                    }
                    else {                        
                        val = str.substring(equalPos + 1, endPos);
                        res[key] = val;
                        i = endPos !== Infinity ? endPos + 1 : str.length;
                    } 
            }


            return res;
        },        
        updateUserAttribute = (obj, key, newValue) => {
            if (obj.hasOwnProperty(key)) {
                obj[key] = newValue;
                return obj;
            } 
            for (let innerMap of Object.values(obj)) {
                if (typeof innerMap === 'object' && innerMap !== null)
                    return updateArrObject(innerMap, key, newValue);

            }
            return obj

        },
        res = split.map(elm => parseStringToObj(elm)),
        usertoUpdate = res.find(user => user.ID === userId);

    updateUserAttribute(usertoUpdate, key, newValue);
    
    return res;
}

// Example usage
const data = "001,Age=25,Name=John,Address={Street=Main St,City=NY,Zip=10001},Email=john@gmail.com\n002,Age=30,Name=Jane,Address={Street=2nd St,City=LA,Zip=90001},Email=jane@hotmail.com";
const userId = "001";
const key = "Email";
const newValue = "johndoe@gmail.com";

const result = solution(data, userId, key, newValue);
console.log(result);


//output
// [
//     {
//         ID: "001",
//         Age: "25",
//         Name: "John",
//         Address: {
//             Street: "Main St",
//             City: "NY",
//             Zip: "10001"
//         },
//         Email: "johndoe@gmail.com"
//     },
//     {
//         ID: "002",
//         Age: "30",
//         Name: "Jane",
//         Address: {
//             Street: "2nd St",
//             City: "LA",
//             Zip: "90001"
//         },
//         Email: "jane@hotmail.com"
//     }
// ]