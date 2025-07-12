// --- Helper Functions for Parsing ---

/**
 * Parses a string of key-value pairs (e.g., "key1=val1;key2=val2") into an object.
 * Handles nested object strings denoted by braces {}.
 * @param {string} str The string of key-value pairs.
 * @returns {object} The parsed object.
 */
const parseKeyValuePairString = (str) => {
    const result = {};
    let currentIndex = 0;

    while (currentIndex < str.length) {
        const equalsIndex = str.indexOf('=', currentIndex);
        if (equalsIndex === -1) {
            // No more valid key=value pairs, break
            break;
        }

        const key = str.substring(currentIndex, equalsIndex).trim();
        let valueStart = equalsIndex + 1;
        let valueEnd;

        // Check if the value starts with a nested object brace
        if (str[valueStart] === '{') {
            let braceCount = 0;
            let i = valueStart;
            // Find the matching closing brace, accounting for nested braces
            while (i < str.length) {
                if (str[i] === '{') braceCount++;
                else if (str[i] === '}') braceCount--;
                if (braceCount === 0 && str[i] === '}') {
                    valueEnd = i;
                    break;
                }
                i++;
            }
            if (valueEnd === undefined) {
                // Malformed nested object (missing closing brace)
                console.warn(`Malformed nested object for key "${key}". Skipping.`);
                break;
            }
            // Recursively parse the content inside the braces
            result[key] = parseKeyValuePairString(str.substring(valueStart + 1, valueEnd));
            currentIndex = valueEnd + 1; // Move past the '}'
        } else {
            // Simple string value: find next semicolon or end of string
            const semicolonIndex = str.indexOf(';', valueStart);
            valueEnd = (semicolonIndex === -1) ? str.length : semicolonIndex;
            result[key] = str.substring(valueStart, valueEnd).trim();
            currentIndex = valueEnd;
        }

        // Move past the current entry's delimiter (semicolon) if present
        if (str[currentIndex] === ';') {
            currentIndex++;
        }
    }
    return result;
};

/**
 * Parses the main custom string format into a top-level JavaScript object structure.
 * Expected format: "key1:{subKey1=subVal1;};key2:{...};"
 * @param {string} inputString The string to parse.
 * @returns {object} The parsed object.
 */
const parseCustomString = (inputString) => {
    const result = {};
    // Splitting by ';' helps simplify the main loop, handling multiple entries
    const entries = inputString.split(';');

    for (let entry of entries) {
        if (!entry.trim()) continue; // Skip any empty entries (e.g., from trailing semicolons)

        const firstColonIndex = entry.indexOf(':');
        if (firstColonIndex === -1) {
            console.warn(`Invalid top-level entry format: "${entry}". Skipping.`);
            continue;
        }

        const key = entry.substring(0, firstColonIndex).trim();
        let valueString = entry.substring(firstColonIndex + 1).trim();

        // The top-level values are expected to be enclosed in braces, like "User1:{...}"
        if (valueString.startsWith('{') && valueString.endsWith('}')) {
            // Recursively parse the content inside the braces
            result[key] = parseKeyValuePairString(valueString.substring(1, valueString.length - 1));
        } else {
            // If it's not a braced object, just assign the value as is
            result[key] = valueString;
        }
    }
    return result;
};

// --- Helper Function for Updating ---

/**
 * Recursively updates a key's value within a nested object structure.
 * It modifies the object in place and updates the *first* occurrence of the key it finds.
 * @param {object} obj The object to update.
 * @param {string} key The key to find.
 * @param {*} val The new value.
 * @returns {boolean} True if the key was found and updated, false otherwise.
 */
const updateNestedObjectValue = (obj, key, val) => {
    // Basic validation: ensure we're working with a valid object
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return false;
    }

    // Check if the current object directly has the key
    if (obj.hasOwnProperty(key)) {
        obj[key] = val; // Update the value
        return true; // Indicate success
    }

    // If not found, recursively search within nested objects (values that are objects)
    for (const innerValue of Object.values(obj)) {
        if (typeof innerValue === 'object' && innerValue !== null && !Array.isArray(innerValue)) {
            if (updateNestedObjectValue(innerValue, key, val)) {
                return true; // Key found in a nested object, propagate success
            }
        }
    }
    return false; // Key not found in this object or its nested objects
};



// ### ** Main`updatePreference` Function **

//     ```javascript
// /**
//  * Updates a specific preference within a structured input string.
//  * This function parses the string, finds the target user's preferences,
//  * updates the specified preference key, and returns the full parsed preferences object.
//  *
//  * @param {string} inputString The initial preference string.
//  * @param {number} userIndex The index of the user (e.g., 1 for 'User1').
//  * @param {string} prefKey The key of the preference to update.
//  * @param {*} newValue The new value for the preference.
//  * @returns {object} The parsed object representation of the preferences after update.
//  */
// const updatePreference = (inputString, userIndex, prefKey, newValue) => {
//     // 1. Parse the entire input string into a structured JavaScript object
//     const allPreferences = parseCustomString(inputString);

//     // 2. Identify the specific user's preferences object
//     const userKey = 'User' + userIndex;
//     const userPreferences = allPreferences[userKey];

//     // 3. Validate if the user's preferences object exists and is valid
//     if (!userPreferences || typeof userPreferences !== 'object') {
//         console.warn(`User preferences for "${userKey}" not found or not a valid object.Cannot update.`);
//         return allPreferences; // Return the original parsed data if user is not found
//     }

//     // 4. Update the specific preference within the user's nested preferences
//     const updated = updateNestedObjectValue(userPreferences, prefKey, newValue);

//     if (!updated) {
//         console.warn(`Preference key "${prefKey}" not found for user "${userKey}".`);
//     }

//     // 5. Return the overall updated preferences object (modifications are in-place)
//     return allPreferences;
// };