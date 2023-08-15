function startProgram() {
    // Ask the user for their first name and store it in the variable Fname.
    var Fname = prompt("Enter your first name: ");

    // Display a welcome message
    var welcomeMessage = "Hello, " + Fname + "! This is my Module 02 JavaScript Program Assignment";
    alert(welcomeMessage);

    // Create the constant piValue to store the value of Pi
    const piValue = 3.1415926;

    // Ask the user to input their favorite number
    var myFavNum = parseFloat(prompt("Enter your favorite number: "));

    // Calculate the area of a circle using the user’s favorite number as the radius
    var myArea = piValue * myFavNum * myFavNum;

    // Display the contents of each variable to the webpage
    var outputMessage = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. If that was the radius of a circle, the circle’s area would be ${myArea.toFixed(6)}.`;
    document.getElementById("output").innerText = outputMessage;
}
