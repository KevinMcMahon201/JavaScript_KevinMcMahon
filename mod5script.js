// Object Literal for Goofy
const Goofy = {
    name: "Goofy",
    breed: "generic",
    movie: "Goof Troop",
    information: "Friend of Mickey Mouse and Donald Duck. Created by The Walt Disney Company. He usually wears a turtle neck, vest and a tall hat.",
    mySound: "Gawrsh! I sound just like a hoot!"
};

// Object Literal for Scooby-Doo
const ScoobyDoo = {
    name: "Scooby-Doo",
    breed: "Great Dane",
    movie: "Scooby-Doo Where Are You",
    information: "Lifelong companion of Shaggy Rogers; about a big dog and several teenage humans.",
    mySound: "Ruh-roh! I sound a bit scared but lovable."
};

// Object Literal for Petey
const Petey = {
    name: "Petey",
    breed: "Pit Bull",
    movie: "The Little Rascals",
    information: "The kids' dog; about a scruffy bunch of kids and their dog; based upon the old live-action film Our Gang.",
    mySound: "Woof! I sound friendly but protective."
};

// Constructor Function for creating Dog Objects
function Dog(name, breed, movie, information, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.movie = movie;
    this.information = information;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display greeting
    this.myGreeting = function() {
        return `hello, my name is ${this.name}, when I bark ${this.mySound}. I starred in the tv show ${this.movie}. my breed was ${this.breed}. I was ${this.information}.`;
    };
}

// Create a new Dog object using constructor
const myDogConst = new Dog("Goofy", "generic", "Goof Troop", "Friend of Mickey Mouse and Donald Duck. Created by The Walt Disney Company. He usually wears a turtle neck, vest and a tall hat.", "Gawrsh! I sound just like a hoot!", true);

// Function to Display Dog Info
function displayDogInfo() {
    const selectedDog = document.getElementById("dogSelector").value;
    let message;

    if (selectedDog === "Goofy") {
        message = Goofy.myGreeting ? Goofy.myGreeting() : myDogConst.myGreeting();
    } else if (selectedDog === "Scooby-Doo") {
        message = `hello, my name is ${ScoobyDoo.name}, when I bark ${ScoobyDoo.mySound}. I starred in the tv show ${ScoobyDoo.movie}. my character was a ${ScoobyDoo.breed}. I was ${ScoobyDoo.information}.`;
    } else if (selectedDog === "Petey") {
        message = `hello, my name is ${Petey.name}, when I bark ${Petey.mySound}. I starred in the tv show ${Petey.movie}. my character was a ${Petey.breed}. I was ${Petey.information}.`;
    }

    document.getElementById("dogInfo").innerText = message;
}
