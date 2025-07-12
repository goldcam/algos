function minimalMaxBlock(array) {
    const lastOccurrence = new Map();
    const maxBlockSizes = new Map();

    for (let i = 0; i < array.length; ++i) {
        const num = array[i];
        if (!lastOccurrence.has(num)) {
            maxBlockSizes.set(num, i);
        } else {
            const blockSize = i - lastOccurrence.get(num) - 1;
            maxBlockSizes.set(num, Math.max(maxBlockSizes.get(num), blockSize));
        }
        lastOccurrence.set(num, i);
    }

    

    lastOccurrence.forEach((pos, num) => {
        const blockSize = array.length - pos - 1;
        maxBlockSizes.set(num, Math.max(maxBlockSizes.get(num), blockSize));
    });

    let minNum = -1;
    let minBlockSize = Number.MAX_VALUE;
    maxBlockSizes.forEach((blockSize, num) => {
        console.log({ minNum, minBlockSize, blockSize, num });
        if (blockSize < minBlockSize) {            
            minBlockSize = blockSize;
            minNum = num;
            console.log({minNum,  minBlockSize, blockSize, num});
        }
    });


    return { minBlockSize, minNum, maxBlockSizes }
}

const test = minimalMaxBlock([6, 2, 2, 3, 6, 4, 4, 4, 6, 2, 5]);

console.log({test})