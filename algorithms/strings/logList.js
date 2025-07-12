function analyzeLogs(logs) {
    let logList = logs.split(", ");

    let timeDict = {};  // Object to record the creation moment for each group in minutes
    let lifeDict = {};  // Object to record the lifetime for each group in minutes

    logList.forEach(log => {
        let parts = log.split(" ");
        let groupId = parseInt(parts[0]);
        let action = parts[1];
        let time = parts[2];

        // Parsing the time from HH:MM format
        let hour = parseInt(time.slice(0, 2));
        let minute = parseInt(time.slice(3, 5));
        let currentTime = hour * 60 + minute; // Time in minutes from the start of the day

        if (action === "create") {
            timeDict[groupId] = [hour, minute]; // If the group is created, log the creation time.
        } else {
            if (timeDict[groupId]) {
                // If the group is deleted, calculate its entire lifetime and remove it from the records.
                let creationTime = timeDict[groupId][0] * 60 + timeDict[groupId][1];
                let lifetime = currentTime - creationTime;
                if (lifeDict[groupId]) {
                    lifeDict[groupId] += lifetime;
                } else {
                    lifeDict[groupId] = lifetime;
                }
                delete timeDict[groupId];
            }
        }
    });

    // Find the longest lifetime
    let maxLife = Math.max(...Object.values(lifeDict));
    console.log({ maxLife })

    // Building the result list where each item is a string of "group ID lifetime" if it has the longest lifetime.
    let result = [];
    for (let groupId in lifeDict) {
        if (lifeDict[groupId] === maxLife) {
            let hours = Math.floor(lifeDict[groupId] / 60);
            let minutes = lifeDict[groupId] % 60;
            let timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
            result.push(groupId + " " + timeString);
        }
    }

    // Sorting the result in ascending order of the group IDs
    return result.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
}

// Example usage:


// Outputs:
// Group 2 lifetime: 05:00


const logs = "1 create 09:00, 2 create 10:00, 1 delete 12:00, 3 create 13:00, 2 delete 15:00, 3 delete 16:00";
const test = analyzeLogs(logs);

console.log({test});

let result = analyzeLogs(logs);
result.forEach(entry => {
    console.log("Group " + entry.split(" ")[0] + " lifetime: " + entry.split(" ")[1]);
});