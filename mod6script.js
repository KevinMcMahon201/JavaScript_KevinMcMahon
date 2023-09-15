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
        let talkingAbility = this.canTalk ? "I can talk!" : "I cannot talk";
        return `Hello, my name is ${this.name}. When I bark, I say ${this.mySound}. I starred in the TV show ${this.movie}. My breed is ${this.breed}. I was ${this.information}. ${talkingAbility}`;
    };
}

// Create new Dog objects using constructor
const Goofy = new Dog("Goofy", "generic", "Goof Troop", "Friend of Mickey Mouse and Donald Duck", "Gawrsh! I sound just like a hoot!", true);
const ScoobyDoo = new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo Where Are You", "Lifelong companion of Shaggy Rogers", "Ruh-roh! I sound a bit scared but lovable.", false);
const Petey = new Dog("Petey", "Pit Bull", "The Little Rascals", "The kids' dog", "Woof! I sound friendly but protective.", false);

// Display Dog Info
function displayDogInfo() {
    const selectedDog = document.getElementById("dogSelector").value;
    let message;

    const dogs = [Goofy, ScoobyDoo, Petey];
    let found = false;

    for (let dog of dogs) {
        if (dog.name === selectedDog) {
            message = dog.myGreeting();
            found = true;
            break;
        }
    }

    if (!found) {
        message = "The dog you selected does not exist.";
    }

    document.getElementById("dogInfo").innerText = message;
}

// Display all properties and values for Dog objects
for (let dog of [Goofy, ScoobyDoo, Petey]) {
    for (let property in dog) {
        console.log(`${property}: ${dog[property]}`);
    }
}

// Prompt user to select a dog
// ... you could use a dropdown in HTML for this, setting the value attribute to each dog's name
