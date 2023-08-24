// Task 1: Write a for loop that counts from 0 to 10
document.write("<strong>Task 1: For Loop</strong><br><br>");
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write("Count " + i + " is even<br>");
    } else {
        document.write("Count " + i + " is odd<br>");
    }
}

// Task 2: Do-While Loop
let myNum = parseInt(prompt("Enter a number between 5 and 20: "));
document.write("<br><strong>Task 2: Do-While Loop</strong><br><br>");
let counter = 1;
do {
    document.write("Loop Counter: " + counter + "<br>");
    counter++;
} while (counter <= myNum);

// Task 3 and 4: Array and forEach Loop
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
document.write("<br><strong>Task 3 and 4: Array and forEach Loop</strong><br><br>");
subjects.forEach(function(subject) {
    document.write(subject + "<br>");
});

// Task 5: Array values separated by commas
document.write("<br><strong>Task 5: Array values separated by commas</strong><br><br>");
document.write(subjects.join(", "));
