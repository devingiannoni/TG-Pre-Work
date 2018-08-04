console.log("bacon");
console.log("the francis bacon");

console.log("JavaScript");
console.log(33.7);
console.log(true);
console.log(null);

console.log(3.5+34);
console.log(2018-1969);
console.log(65/240);
console.log(0.2708*100);

console.log("Teaching the world how to code".length)

// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase()); 

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); 

console.log(Math.random()*100);

console.log(Math.floor(Math.random()*100));

console.log(Math.ceil(43.8));

console.log(Number.isInteger(2017));

// Opening Line
console.log('It was love at first sight.');

/* console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);

let changeMe = true;
changeMe = false;
console.log(changeMe);

let notDefined;
let valueless = undefined;
console.log(valueless);

let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below

molecule += 16;
// Multiply and assign to particle below

particle *= 6.02;
// Increment assay by 1

assay++;

let favoriteAnimal = 'bird';
console.log('My favorite animal: ' + favoriteAnimal)

let myName = 'Devin Giannoni';
let myCity = 'Cocoa Beach';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let userName = 'Devin Giannoni';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

let isSoccerFan = false;

if (isSoccerFan === true) {
  console.log('Goal!');
} else {
  console.log('No goal!');
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'bacon';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'bacon';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let hungerLevel = 10;

if (hungerLevel > 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat Later!');
}

let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf.');
}

let moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

let moonPhase = 'full';
let isFoggyNight = false;


if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

let moonPhase = 'mostly full';

switch (moonPhase) {
  case 'full': 
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;    
}

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

const takeOrder = () => {
  console.log('Order: pizza');
}

takeOrder();

const takeOrder = (topping) => {
  console.log('Order: pizza topped with ' + topping);
};

takeOrder('mushrooms');

const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06
}

const getTotal = (itemCount) => {
  return getTax(itemCount) + getSubTotal(itemCount)
}

console.log(getSubTotal(orderCount));

console.log(getTotal(orderCount))

function isGreaterThan(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(3, 4)

const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)

const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log(myNightSky());
console.log(stars);
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
};
visibleLightWaves();
console.log(lightWaves);

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);  
  }
  console.log(lightWaves);
};
visibleLightWaves();

const starCount = () => {
  let i = 5;
  console.log(i);
  for (let i = 0; i < 12; i++) {
    console.log(i);  
  }
};
starCount();

//code academy insisted on removing my original work when i double checked it

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];
console.log(newYearsResolutions);

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

let listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

let listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];
console.log(newYearsResolutions.length);

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books', 'get a job at techtonics group', 'figure out how to get to boulder'];

newYearsResolutions.push('Climb a mountain', 'Learn to Code');

console.log(newYearsResolutions);

newYearsResolutions.pop();
console.log(newYearsResolutions);

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Onions');
condiments = ['Sriracha'];
console.log(condiments);
utensils.pop();
utensils = ['Seafood Hammer'];

let vacationSpots = ['Cocoa Beach', 'Cape Canaveral', 'Miami'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

let vacationSpots = ['Cocoa Beach', 'Cape Canaveral', 'Miami'];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

let vacationSpots = ['Cocoa Beach', 'Cape Canaveral', 'Miami'];

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

let myPlaces = ['Cocoa Beach', 'Cape Canaveral', 'Miami'];

let friendPlaces = ['The Moon', 'Mars', 'Miami'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}

console.log('You found a spade!');

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log('I want to eat a ' + fruit));

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animal => animal.charAt(0));

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(num => num/100);

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

let smallNumbers = randomNumbers.filter(num => num.length < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});

// Refactor the code above using arrow function syntax

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

let words = ['embiggen', 'cromulent', 'unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every(word =>  word.length > 5      ));

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

let person = {
  name: 'Devin Giannoni',
  age: 34
};

let person = {
  name: 'Devin Giannoni',
  age: 34
};
console.log(person.name);
console.log(person.age);

let person = {
  name: 'Devin Giannoni',
  age: 34
};
console.log(person['name']);
console.log(person['age']);

let person = {
  name: 'Devin Giannoni',
  age: 34,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

let day = 'Saturday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = person['weekendAlarm'];
} else {
  alarm = person['weekAlarm'];
}

console.log(person['name']);
console.log(person['age']);
console.log(alarm);

let person = {
  name: 'Devin Giannoni',
  age: 34,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['simpsons quotes', 'cooking italian food']

let day = 'Saturday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = person['weekendAlarm'];
} else {
  alarm = person['weekAlarm'];
}

console.log(person['name']);
console.log(person['age']);
console.log(alarm);
console.log(person['hobbies']);

let person = {
  name: 'Devin Giannoni',
  age: 34,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['simpsons quotes', 'cooking italian food']
person.hobbies = [person.hobbies.pop()];

let day = 'Saturday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = person['weekendAlarm'];
} else {
  alarm = person['weekAlarm'];
}

console.log(person['name']);
console.log(person['age']);
console.log(alarm);
console.log(person['hobbies']);

let person = {
  name: 'Devin Giannoni',
  age: 34,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
    return 'Hello there!';
  }
};

person.hobbies = ['simpsons quotes', 'cooking italian food']
person.hobbies = [person.hobbies.pop()];

let day = 'Saturday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = person['weekendAlarm'];
} else {
  alarm = person['weekAlarm'];
}

console.log(person['name']);
console.log(person['age']);
console.log(alarm);
console.log(person['hobbies']);
console.log(person.sayHello());

let person = {
  name: 'Devin Giannoni',
  age: 34,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
    return 'Hello there!';
  },
  sayGoodbye(){
  return 'Goodbye!';
}
};

person.hobbies = ['simpsons quotes', 'cooking italian food']
person.hobbies = [person.hobbies.pop()];

let day = 'Saturday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = person['weekendAlarm'];
} else {
  alarm = person['weekAlarm'];
}

console.log(person['name']);
console.log(person['age']);
console.log(alarm);
console.log(person['hobbies']);
console.log(person.sayHello());

let person = {
  name: 'Devin Giannoni',
  age: 34,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`
  },
  sayGoodbye(){
  return 'Goodbye!';
}
};

person.hobbies = ['simpsons quotes', 'cooking italian food']
person.hobbies = [person.hobbies.pop()];

let day = 'Saturday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = person['weekendAlarm'];
} else {
  alarm = person['weekAlarm'];
}

console.log(person['name']);
console.log(person['age']);
console.log(alarm);
console.log(person['hobbies']);
console.log(person.sayHello());

let person = {
  name: 'Devin Giannoni',
  age: 34,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`
  },

  sayGoodbye(){
  return 'Goodbye!';
  }
  
};

let friend = {
  name: 'Wyatt Erp',
  sayHello: person.sayHello,
}

person.hobbies = ['simpsons quotes', 'cooking italian food']
person.hobbies = [person.hobbies.pop()];

let day = 'Saturday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = person['weekendAlarm'];
} else {
  alarm = person['weekAlarm'];
}

console.log(person['name']);
console.log(person['age']);
console.log(alarm);
console.log(person['hobbies']);
console.log(person.sayHello());
console.log(friend.sayHello());

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }

};

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }

};
person.age = 39;

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};
person.age = 39;
console.log(person.age);

class Surgeon {
  constructor(name, department){
    this.name = name;
    this.department = department;
  }
}

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

