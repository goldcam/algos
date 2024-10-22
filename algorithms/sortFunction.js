let friends = ["Tom", "Jerry", "Mickey", "Donald"];
friends.sort();

console.log(friends); 
// Output: ["Donald", "Jerry", "Mickey", "Tom"]

let numbers = [15, 1, 100, 3];
numbers.sort((a, b) => a - b); // This will sort numbers in ascending order

console.log(numbers); // Output: [1, 3, 15, 100]

let scores = [60, 90, 82, 100, 56];
scores.sort((a, b) => b - a);

console.log(scores); // Output: [100, 90, 82, 60, 56]

let students = [
    { name: "Tom", grade: 90 },
    { name: "Jerry", grade: 95 },
    { name: "Mickey", grade: 90 },
    { name: "Donald", grade: 95 }
  ];

  students.sort((a, b) => {
    if (a.grade < b.grade) return -1;
    if (a.grade > b.grade) return 1;
    
    // Here, 'grade' is the same, so we sort by 'name'
    if (a.name < b.name) return -1;  
    if (a.name > b.name) return 1;
    
    return 0; // a and b are equal, remain in same position
  });

  console.log(students);
/* Output:
[
  { name: 'Mickey', grade: 90 },
  { name: 'Tom', grade: 90 },
  { name: 'Donald', grade: 95 },
  { name: 'Jerry', grade: 95 }
]
*/