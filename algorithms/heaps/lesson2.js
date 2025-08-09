function solution(data, queries) {

  let currentData = [...data].sort((a, b) => a - b);
  const results = [];

  for (const query of queries) {
    const {type} = query, n = currentData.length;
    if (type === 'delete') {
        const {k} = query.k;
      if (n >= query.k) {
        currentData.splice(k - 1, 1);
      }
    } else if (type === 'find') {
      if (n >= 3) {
        results.push(currentData[2]);
      } else {
        results.push(-1);
      }
    }
  }

  return results;
    // const res = [];
    // data.sort((a, b ) => a - b);

    //  for(let query of queries) {
    //     const {type} = query;
    //     if(type === 'delete') {
    //         const {k} = query;
    //         data.splice(k -1, 1);
    //     } else if(type === 'find') {
    //         if(data.length >3 ) {
    //             res.push(data[2]);                
    //         } else {
    //             res.push(-1);
    //         }
    //     }

    // }
    // return res;
}

// Example usage
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [{type: 'delete', k: 1}, {type: 'find'}, {type: 'delete', k: 2}, {type: 'find'}]));