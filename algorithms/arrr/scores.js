function solution(playerIds, playerScores, queries) {
    // TODO: Your solution
   

    const playerObject = {};
    for (let i = 0; i < playerIds.length; i++) {
        playerObject[playerIds[i]] = playerScores[i];
    }

    const res = [];
    for (let i = 0; i < queries.length; i++) {
        const score = playerObject[queries[i]];
        if (score !== undefined) { 
            res.push(score);
        }
    }
    return res;
   //too slow!
    // const res = [];
    // for(let i = 0; i < queries.length; i++) {
    //     const playerIdIndex = playerIds.indexOf(queries[i]);
    //     res.push(playerScores[playerIdIndex])        
    // }

    // return res;
}

// Example usage:
const playerIds = [1, 2, 3, 4, 5];
const playerScores = [100, 200, 150, 50, 300];
const queries = [2, 5, 1];
console.log(solution(playerIds, playerScores, queries));