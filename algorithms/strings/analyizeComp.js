const analyzeCompetition = (logs) => {
    const splitLogs = logs.split(', '),
          res = [],
          results = {},
          
          incrementLogMetric = (logObj, metricName) => ({
        ...logObj,
        [metricName]: logObj[metricName] + 1 
    }),
    incrementScore = (logObj, score) => ({...logObj, totalScore: logObj.totalScore + score})


    for(let log of splitLogs) {
        const parts = log.split(' '),
              id = parts[0],
              action = parts[1],
              score = Number(parts[2]) || 0; 
        
        if (!results[id]) results[id] = { totalScore: 0, solve: 0, fail: 0 };
        results[id] = incrementLogMetric(results[id], action);
        if (score > 0) results[id] = incrementScore(results[id], score);     
    }

    for(let i in results) {
        const totalScore = results[i].totalScore
        if (totalScore > 0) res.push([Number(i), results[i].totalScore, results[i].solve, results[i].fail])        
    }

    return res.sort((a, b) => b[1] - a[1]);
}

// Example usage:
let logs = "1 solve 50, 2 solve 60, 1 fail, 3 solve 40, 2 fail, 3 solve 70, 4 fail";

// Expected output: [[3, 110, 2, 0], [2, 60, 1, 1], [1, 50, 1, 1]]




const  analyzeCompetition2 = (logs) => {
    const events = logs.split(', ');
    const participantStats = new Map();

    for (const event of events) {
        const parts = event.split(' ');
        const id = Number(parts[0]); 
        const action = parts[1];
        const score = Number(parts[2]) || 0;
        let currentStats = participantStats.get(id);
        if (!currentStats) {
            currentStats = { totalScore: 0, solves: 0, fails: 0 };
            participantStats.set(id, currentStats);
        }
        if (action === 'solve') {
            currentStats.totalScore += score;
            currentStats.solves += 1;
        } else if (action === 'fail') {
            currentStats.fails += 1;
        }
    }

    const finalResults = [];
    for (const [id, stats] of participantStats.entries()) {
        if (stats.totalScore > 0) finalResults.push([id, stats.totalScore, stats.solves, stats.fails]);
    }
    return finalResults.sort((a, b) => b[1] - a[1]); 
}

console.log(analyzeCompetition2(logs));

