class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        if (!this.head) {
            return;
        }
    
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
    
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

class Node2 {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList2 {
    constructor() {
        this.head=null;
    }

    append(data) {
        const newNode = new Node2(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
    show() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

function listLength(list) {
    var length = 0;
    var currentNode = list.head;
    // Traverse the list from head to tail
    while (currentNode !== null) {
        length++; // Increment our counter for each node encountered
        currentNode = currentNode.next; // Move to the next node in the list
    }
    return length;
}


let list = new LinkedList2();
list.append(1);
list.append(7);
list.append(3);
console.log(listLength(list));  // 3

function removeDuplicates(list) {
    if (list.head === null || list.head.next === null) return head;

    let currentNode = list.head;
    // Imagine the set as a guest list where we mark off each attendee.
    const seen = new Set([currentNode.value]);

    while (currentNode.next !== null) {
        // Upon encountering a guest who's already marked, we avoid re-inviting them.
        if (seen.has(currentNode.next.value)) {
            currentNode.next = currentNode.next.next;
        } else {
            // A new guest is marked as 'invited'.
            seen.add(currentNode.next.value);
            currentNode = currentNode.next;
        }
    }
}

let list1 = new LinkedList2();
list.append(1);
list.append(1);
list.append(3);
list.append(3);
list.append(3);
list.append(5);
removeDuplicates(list)
list.show();  // 1 3 5

function averageOfEveryThird(list) {
    if (list.head === null) return 0; 

    let sum = 0, count = 0, index = 0;
    let currentNode = list.head;

    // Walk through the orchard (linked list), tasting (examining) every third apple (node).
    while (currentNode !== null) {
        // Only use every third element
        if ((index + 1) % 3 === 0) {
            // Add the value and increment the count.
            sum += currentNode.value;
            count++;
        }
        currentNode = currentNode.next;  // Move to the next tree (node).
        index++;  // Take a step forward.
    }

    // It's time to calculate the average value of our sampled nodes.
    return parseFloat((sum / count).toFixed(2));
}

let list3 = new LinkedList();
list.append(2);
list.append(3);
list.append(7);  // to be counted
list.append(2);
list.append(1);
list.append(5);  // to be counted
console.log(averageOfEveryThird(list)); // 6