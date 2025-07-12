function solution(jsonString, updateValue) {
    // TODO: Your solution
    const parsed = JSON.parse(jsonString);


    // let key = '';
    // let activeMap = result;
    // let stack = [];
    // let i = 0;
    // while(i < jsonString.length) {
    //     if (jsonString[i] === '{') {
    //         // Entering a nested map
    //         stack.push(activeMap); // Save the current map
    //         activeMap = {}; // Create a new inner map
    //         stack[stack.length - 1][key] = activeMap; // Link it to the outer map
    //         i++; // Skip the '{'
    //     } else if (jsonString[i] === '}') {
    //         // Exiting a nested map
    //         activeMap = stack.pop(); // Restore the previous map
    //         i++; // Skip the '}'
    //         if (i < jsonString.length && jsonString[i] === ',') {
    //             i++; // Skip the ',' after '}'
    //         }
    //     }
    //     else {
    //         // Parsing key-value pairs inside the active map (could be outer or inner)
    //         let colPos = jsonString.indexOf(':', i);
    //         let delimiter = jsonString.indexOf(',', colPos);
    //         let bracePos = jsonString.indexOf('}', colPos);

    //         // Determine the next delimiter that ends the current key-value pair
    //         let endPos = Math.min(delimiter === -1 ? Infinity : delimiter, bracePos === -1 ? Infinity : bracePos);

    //         key = jsonString.substring(i, colPos);
    //         let value = jsonString.substring(colPos + 1, endPos);

    //         if (value.includes("{")) {
    //             // Set up for nested map; skip processing value now
    //             i = colPos + 1;
    //         } else {
    //             // Add key-value pair to the active map
    //             activeMap[key] = value;
    //             i = endPos !== Infinity ? endPos : jsonString.length; // Move to the next starting index
    //             if (i < jsonString.length && jsonString[i] === ',') {
    //                 i++; // Skip the comma
    //             }
    //         }
    //     }
    // }


    const  updateObject = (obj, key, value) => {
        if (obj.hasOwnProperty(key)) obj[key] = value;

        for (let innerMap of Object.values(obj)) {
            if (typeof innerMap === 'object' && innerMap !== null) {
                if (updateObject(innerMap, key, value)) {
                }
            }
        }

        return false;
    }
    updateObject(parsed, updateValue, newValue);
     return parsed;
}

const jsonString = "{\"key1\": \"value1\", \"key2\": {\"key3\": \"value3\", \"key4\": \"value4\"}, \"key5\": \"value5\"}";
const newValue = "newValue";

const updatedObject = solution(jsonString, newValue);
console.log(updatedObject);