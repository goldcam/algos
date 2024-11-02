class Queue {
    constructor() {
        this.data = []; // A queue is constructed as an array
    }
    enqueue(element) { 
        // The push() method adds an element at the end
        this.data.push(element); 
    }
    dequeue() {
        if(this.isEmpty()) 
            return "Underflow"; // If the queue is empty
        // The shift() method removes an element from the start
        return this.data.shift(); 
    }
    isEmpty() {
        // The length property checks if the queue is empty
        return !this.data.length; 
    }
}

let queue = new Queue();
queue.enqueue(1); // 1 is added at the end of the queue
queue.enqueue(2); // 2 is now at the end, and 1 moves a step forward 
queue.enqueue(3); // 3 joins at the end, pushing 2 and 1 further up
console.log(queue); // {data: [1, 2, 3]}

let queue2 = new Queue();
queue2.enqueue(1); // 1 is the first to join the queue
queue2.enqueue(2); 
queue2.enqueue(3);
queue2.dequeue(); // 1 is removed as it was the first to join
console.log(queue2); // {data: [2, 3]}

function interweaveQueues(queue1, queue2) {
    let resultQueue = new Queue();
    
    // Continuously loop until both queues are empty.
    while (!queue1.isEmpty() || !queue2.isEmpty()) {
      // Take turns removing elements from each queue and enqueuing them into the resultQueue.
      if (!queue1.isEmpty()) {
        resultQueue.enqueue(queue1.dequeue());
      }
      if (!queue2.isEmpty()) {
        resultQueue.enqueue(queue2.dequeue());
      }
    }
    return resultQueue;
  }

  class MovingAverage {
    constructor(size) {
        this.size = size;
        this.window = new Queue();
        this.sum = 0.0;
    }

    next(val) {
        if (this.window.getSize() === this.size) {
            this.sum -= this.window.dequeue();
        }

        this.window.enqueue(val);
        this.sum += val;
        return this.sum / this.window.getSize();
    }
}


const movingAvg = new MovingAverage(3);
console.log(movingAvg.next(1));     // returns 1.0 (like a single heart rate reading)
console.log(movingAvg.next(10));    // returns 5.5 (the average after a short burst of activity)
console.log(movingAvg.next(3));     // returns 4.66667 (normalizing after the burst)
console.log(movingAvg.next(5));     // returns 6.0 (the most recent average, taking into account the last three readings)