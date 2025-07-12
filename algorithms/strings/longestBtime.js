function solution(logs) {
    // TODO: Your solution
    const bookLogs = logs.split(', ');
    const res = [];
    

    let borrowTime = {};
    let returnTime = {};

    for(let log of bookLogs ){
        
        const parts = log.split(' ');
        const id = parts[0];
        const action = parts[1];
        const time = parts[2];
        let hour = parseInt(time.slice(0, 2));
        let minute = parseInt(time.slice(3, 5));
        let currentTime = hour * 60 + minute; 

        if (action === 'borrow') {
            borrowTime[id] = [hour, minute];
        } else {
            if (borrowTime[id]) {
                let creationTime = borrowTime[id][0] * 60 + borrowTime[id][1];
                let lifetime = currentTime - creationTime;
               
                if (returnTime[id]) {
                    returnTime[id] += lifetime;
                } else {
                    returnTime[id] = lifetime;
                }
                delete borrowTime[id];

            }
        }
    }

    let maxTime = Math.max(...Object.values(returnTime)); 
    for (let record in returnTime){
        if (returnTime[record] === maxTime) {
            let hours = Math.floor(returnTime[record] / 60);
            let minutes = returnTime[record] % 60;
            let timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);

            res.push(`${record} ${timeString}`)
        }
    }

    return res.sort((a, b) => a[0] - b[0]);
}

// Example usage:
// console.log(solution("1 borrow 09:00, 2 borrow 10:00, 1 return 14:00, 3 borrow 13:00, 2 return 15:00, 3 return 18:00"));
console.log(solution("1 borrow 09:00, 2 borrow 10:00, 1 return 12:00, 1 borrow 13:00, 2 return 18:00, 1 return 18:00"));
// Expected output: ["2 05:00"]