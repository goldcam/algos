
function findInfluencer(connections) {
    // TODO: Implement function
    let res = '';
    const directConnections = new Map();
    let totalCount = 0;
    

    const addConnection = (map, nodeA, nodeB) => {
        if (map.has(nodeA)) {
            map.get(nodeA).push(nodeB);
        } else {
            map.set(nodeA, [nodeB]);
        }
    };


    for (let c of connections) {
        const p1 = c[0], p2 = c[1];
        addConnection(directConnections, p1, p2); 
        addConnection(directConnections, p2, p1); 
    }

    for(let c of directConnections) {
        const personToAnalyze = c[0], frendsTotal = c[1].length;
        const directFriends = directConnections.get(personToAnalyze) || [];
        const friendsOfFriends = new Set();
        for (const friend of directFriends) {
            const friendsOfFriend = directConnections.get(friend) || []; 
            for (const fof of friendsOfFriend) {
                friendsOfFriends.add(fof);
            }
        }
        friendsOfFriends.delete(personToAnalyze);
        for (const directFriend of directFriends) {
            friendsOfFriends.delete(directFriend);
        }
        const totalConnections = friendsOfFriends.size + frendsTotal;
        if(totalConnections > totalCount) {
            res = personToAnalyze;
            totalCount = totalConnections;
        }
    }   

    return res; 
}

// Example usage with named people
const namedConnections = [
  ['Alice', 'Bob'], ['Bob', 'Charlie'], ['Alice', 'Charlie'],
  ['Alice', 'David'], ['David', 'Eve'], ['Eve', 'Frank'],
  ['Bob', 'Frank']
];
console.log(findInfluencer(namedConnections)); // Expected output: 'Alice'