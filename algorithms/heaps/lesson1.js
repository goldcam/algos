function solution(operations) {
    // TODO: Your solution    
    const heap = new MaxHeap();
    const maxOpps = [];
    for(let op of operations){
        const action =  op[0];
        switch(action) {
            case 'Add':
                const val = parseInt(op[1]);
                heap.add(val);                
                break;
            case 'Max':
                maxOpps.push(heap.peek());
                break;
            case 'RemoveMax':
                heap.poll()
                break;
            default:
                break;
        }
    }
    
    return maxOpps;
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    add(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    poll() {
        if (this.isEmpty()) return null;
        const maxValue = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return maxValue;
    }

    peek() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swapIndex = leftChildIndex;
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
                swapIndex = rightChildIndex;
            }
            if (this.heap[index] >= this.heap[swapIndex]) break;
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }
}

// Test the function
const operations = [["Add", "3"], ["Add", "10"], ["Max", ""], ["Add", "5"], ["Max", ""], ["RemoveMax", ""], ["Max", ""]];
const results = solution(operations);
console.log(results);