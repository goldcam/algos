
function partitionLabels(s) {
    const n = s.length;

    const lastCharIndex = new Array(26).fill(-1); 
    for (let i = 0; i < n; i++) {
        const charCode = s.charCodeAt(i) - 'a'.charCodeAt(0);
        lastCharIndex[charCode] = i; 
    }   
    const partitions = [];
    let currentPartitionStart = 0; 
    let maxReachForCurrentSegment = 0;

    for (let i = 0; i < n; i++) {
        const charCode = s.charCodeAt(i) - 'a'.charCodeAt(0);
        const charLastOccurrence = lastCharIndex[charCode];
        maxReachForCurrentSegment = Math.max(maxReachForCurrentSegment, charLastOccurrence);

        if (i === maxReachForCurrentSegment) {
            
            const partitionLength = (i - currentPartitionStart + 1);
            partitions.push(partitionLength);
            currentPartitionStart = i + 1;

        }
    }

    return partitions;
}
