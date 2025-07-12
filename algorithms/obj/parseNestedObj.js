function parseString(inputString) {
    const result = {};

    let key = ""; // to store the current key
    let activeMap = result; // to dynamically switch between result and inner maps
    let stack = []; // stack to keep track of maps when nested
    let i = 0; // to iterate through the string


    while (i < inputString.length) {
        if (inputString[i] === '{') {
            // Entering a nested map
            stack.push(activeMap); // Save the current map
            activeMap = {}; // Create a new inner map
            stack[stack.length - 1][key] = activeMap; // Link it to the outer map
            i++; // Skip the '{'
        } else if (inputString[i] === '}') {
            // Exiting a nested map
            activeMap = stack.pop(); // Restore the previous map
            i++; // Skip the '}'
            if (i < inputString.length && inputString[i] === ',') {
                i++; // Skip the ',' after '}'
            }
        }
        else {
            // Parsing key-value pairs inside the active map (could be outer or inner)
            let equalPos = inputString.indexOf('=', i);
            let delimiter = inputString.indexOf(',', equalPos);
            let bracePos = inputString.indexOf('}', equalPos);

            // Determine the next delimiter that ends the current key-value pair
            let endPos = Math.min(delimiter === -1 ? Infinity : delimiter, bracePos === -1 ? Infinity : bracePos);

            key = inputString.substring(i, equalPos);
            let value = inputString.substring(equalPos + 1, endPos);

            if (value.includes("{")) {
                // Set up for nested map; skip processing value now
                i = equalPos + 1;
            } else {
                // Add key-value pair to the active map
                activeMap[key] = value;
                i = endPos !== Infinity ? endPos : inputString.length; // Move to the next starting index
                if (i < inputString.length && inputString[i] === ',') {
                    i++; // Skip the comma
                }
            }
        }
    }

    return result;
}

function updateObject(obj, key, value) {
    if (obj.hasOwnProperty(key)) {
        obj[key] = value;
        return true;
    }

    for (let innerMap of Object.values(obj)) {
        if (typeof innerMap === 'object' && innerMap !== null) {
            if (updateObject(innerMap, key, value)) {
                return true;
            }
        }
    }

    return false;
}

function parseStringAndUpdateValue(inputString, updateKey, newValue) {
    // Parse the input string into a nested object
    let obj = parseString(inputString);
    // Update the specific key-value pair
    updateObject(obj, updateKey, newValue);
    return obj;
}

const input = "A1=B1,C1={D1=E1,F1=G1},I1=J1";
const updateKey = "F1";
const newValue = "NewValue";

const updatedObject = parseStringAndUpdateValue(input, updateKey, newValue);
console.log(updatedObject); // Output: { A1: 'B1', C1: { D1: 'E1', F1: 'NewValue' }, I1: 'J1' }