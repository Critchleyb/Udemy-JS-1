// LET & CONST

/*

//ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

//ES6

const name6 = 'Jane Smith'; // cant be changed

let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

*/

/*

// ES5
function driversLicence5(passedTest) {

    console.log(firstName); //UNDEFINED

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' can drive'); //VAR CAN BE USED OUTSIDE OF THE { BLOCK }
}

driversLicence5(true);

*/

//ES6

/*

function driversLicence6(passedTest) {

    // let firstName = 'John'; THIS WILL ERROR

    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;       
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' can drive'); //LET AND CONST CANT BE USED OUTSIDE OF THE BLOCK
}

driversLicence6(true);

*/

/*

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/

// BLOCKS AND IIFEs 
/*

{ //THIS IS A BLOCK, THE VARIABLES ARE BLOCK SCOPED
    const a = 1;
    let b = 2;
    var c = 3; //THIS ONE ISNT BLOCK SCOPED
}

console.log(a+b);

*/
//STRINGS

/*

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2020-year;
};


//ES5

console.log('This is ' + firstName + ' ' + lastName + ' and on and on ' + calcAge(yearOfBirth));

//ES6

console.log(`This is ${firstName} ${lastName} and on and on ${calcAge(yearOfBirth)}`); //Template literal with ` ` and ${ }

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //Bool if it starts with the char, case sensitive
console.log(n.endsWith('h')); //Bool if it end with the char, case sensitive
console.log(n.includes(' ')); //Returns Bool based on if the string contains the char, case sensitive
console.log(`${firstName} `.repeat(5))

*/

//ARROW FUNCTIONS

/*

const years = [1990, 1965, 1982, 1937];

//ES5

var ages5 = years.map(function (el)  {
    return 2020 - el;
})
console.log(ages5);

//ES6

const ages6 = years.map(el => 2016 - el); //LAMDA EXPRESSION
console.log(ages6);


const ages62 = years.map((el, index) => `Index ${index} is ${2016 - el}` ); //MULTIPLE ARGUMENTS
console.log(ages62);

const ages63 = years.map((el, index) => { //MULTIPLE LINES
    console.log(el);
    return `Index ${index} is ${2016 - el}`;
});
console.log(ages63);

*/

//ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this; //THIS WONT WORK BECAUSE WHEN YOU CLICK, this. IS ATTACHED TO THE WINDOW, NOT THE OBJECT. self IS WHAT YOU WOULD USE TO GET AROUND THE PROBLEM
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'this is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box5.clickMe();
*/
//ES6

/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => { //ARROW FUNCTION SHARE THE LEXICAL this KEYWORD OF ITS SURROUNDINGS. SO THIS WORKS
            const str = 'this is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();
*/

/*const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => { //USING AN ARROW HERE, CAUSES this TO GO TO THE GLOBAL OBJECT AGAIN. YOU HAVE TO BE CAREFUL
        document.querySelector('.green').addEventListener('click', () => { 
            const str = 'this is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();*/

//ES5
/*
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
};

var friends = ['Bob','Jane'];
new Person('John').myFriends5(friends);
*/
//ES6

/*

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function (friends) {
    const arr = friends.map(el => this.name + ' is friends with ' + el);

    console.log(arr);
};

var friends = ['Bob', 'Jane'];
new Person('Mike').myFriends6(friends);

*/

//DESTRUCTURING

// ES5
/*
var john = ['John',26];

var name = john[0];
var age = john[1];

//ES6
const [name6, age6] = ['John', 26];
console.log(`${name6} ${age6}`);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName,lastName} = obj;
console.log(`${firstName} ${lastName}`);

const {firstName: a, lastName: b } = obj;
console.log(`${a} ${b}`);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 -  age];
}

const [age2,retirement] = calcAgeRetirement(1993);
console.log(`${age2} ${retirement}`);
*/

//ARRAYS 
/*
const boxes = document.querySelectorAll('.box');
*/

//ARRAY.FROM METHOD
//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});
*/

//ES6
/*
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
//ES5 LOOPS with break / continue
/*
for(var i = 0; i < boxesArr6.length; i++){
    if(boxesArr6[i].className === 'box blue') {
        continue;
    }

    boxesArr6[i].textContent = 'I changed to blue!';
}
*/

//ES6 FOR OF
/*
for (const cur of boxesArr6) {
    if (cur.className === 'box blue') {continue;}
    cur.textContent = 'I changed to blue!';
}
*/

//ES5 
/*

var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

//SPREAD OPERATORS
/*
function addFourAges(a,b,c,d) {
    return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

//ES5

var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

//ES6

const sum3 = addFourAges(...ages); // ... is the spread operator, it expands an array into its components
console.log(sum3);

const familySmith = ['John','Jane','Mark'];
const familtMiller = ['Mary','Bob','Anne'];
const bigFamily = [...familySmith,'Lily',...familtMiller]; //can be used to combine arrays
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h,...boxes];

Array.from(all).forEach(el => el.style.color = 'purple');
*/

//REST Parameters
/*
//ES5
function isFullAges5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    });
}
isFullAges5(1990,1999,1965);
isFullAges5(1990, 1999, 1965, 2016, 1987);
*/
//ES6
/*
function isFullAges6(limit, ...years) { //TURNS ALL ARGS INTO AN ARRAY ... IS THE REST PARAMETER
    years.forEach(el => console.log((2016-el) >= limit));
}
isFullAges6(18, 1990, 1999, 1965, 2016, 1987);
*/

//DEFAULT PARAMETERS

//ES5
/*
function SmithPerson(firstName,yearOfBirth,lastName,nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'British' : nationality = nationality;
    
    this.firstName = firstName;
    this.LastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('john',1990);
console.log(john);
*/
//ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'British') {
    this.firstName = firstName;
    this.LastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('john', 1990);
console.log(john);
*/

//MAPS
/*
const question = new Map();
question.set('question','What is 1+1',)
question.set(1, '1');
question.set(2, '2');
question.set(3 , '3');
question.set(4, '4');
question.set('correct', 2);
question.set(true, 'Correct Answer');
question.set(false, ' Wrong Answer');

console.log(question.get('question'));
console.log(question.size);
*/
/*
if(question.has(4)) {
    question.delete(4);
}
*/

//question.clear();
/*
question.forEach((el, key) => console.log(`${key} is set to ${el}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {console.log(`${key} is set to ${value}`)}
}

const ans = parseInt(prompt());

console.log(question.get(ans === question.get('correct')));
*/

//CLASSES
/*
//ES5

var Person5 = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

john5 = new Person5('john',1990,'teacher');

//ES6

class Person6 {
    constructor(name, yearOfBirth,job) {
        this.name = name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('hey there!');
    }
}
const mark = new Person6('mark',1993,'Developer');
mark.calculateAge();

Person6.greeting();
*/


//SUBCLASSES

//ES5
/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job)
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('john',1990,'swimmer',3,10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/
//ES6
/*
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('hey there!');
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}
markAthlete = new Athlete6('john',1990,'swimmer',3,10);
markAthlete.wonMedal();
markAthlete.calculateAge();
*/

//Challenge 8
let parks = [];
let streets = [];

class Controller {
    constructor(){}

    static createPark(name, buildYear, numberOfTrees, parkArea) {
        const newPark = new Park(name, buildYear, numberOfTrees, parkArea);
        this.addToArray(newPark);
        return newPark;
    }

    static createStreet(name, buildYear, length) {
        const newStreet = new Street(name, buildYear, length);
        this.addToArray(newStreet);
        return newStreet;
    }

    static addToArray(el) {
        if (el instanceof Park){
            parks.push(el);
        } else if (el instanceof Street) {
            streets.push(el);
        }
    }

    static reportTreeDensity(){
        const report = new Map();
        parks.forEach(el => report.set(el.name,el.getTreeDensity()))
        return report;
    }

    static reportAverageParkAge(){
        let totalAge = 0;
        parks.forEach(el => {
            totalAge += el.getAge();
        });
        return totalAge / parks.length;
    }

    static reportHasThousandTrees(){
        parks.forEach(el => {
            if(el.hasThousandTrees()){
                console.log(`${el.name} has over 1000 trees.`);
            }
        });
    }

    static reportStreetLength() {
        let totalLength = 0;
        streets.forEach(el => {
            totalLength += el.length;
        });

        const averageLength = totalLength / streets.length;
        return [totalLength, averageLength];
    }

    static reportStreetClass() {
        streets.forEach(el => console.log(`${el.name}, built in ${el.buildYear}, is a ${el.sizeClass} street.`));
    }

    static fullReport() {
        console.log('----PARKS REPORT----');
        
        console.log(`Average age of all parks is ${this.reportAverageParkAge()}`)
        
        const densityReport = this.reportTreeDensity();
        for(let [key, value] of densityReport.entries()){
            console.log(`${key} has a tree density of ${value}`);
        }

        this.reportHasThousandTrees();

        console.log('----STREETS REPORT----');

        const [streetTotalLength, streetsAverageLength] = this.reportStreetLength();
        console.log(`Our streets have a total length of ${streetTotalLength}M, the average length is ${streetsAverageLength}M`);

        this.reportStreetClass();
    }
}

class Structure extends Controller  {
     constructor(name,buildYear) {
        super();
        this.name = name;
        this.buildYear = buildYear;
     }

     getAge() {
        return (new Date().getFullYear() - this.buildYear);
     }
}

class Park extends Structure {
    constructor(name, buildYear, numberOfTrees, parkArea) {
        super(name,buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    getTreeDensity() {
        return this.numberOfTrees/this.parkArea;
    }

    hasThousandTrees() {
        return this.numberOfTrees >= 1000;
    }
}

class Street extends Structure {
    constructor(name, buildYear, length){
        super(name,buildYear);
        this.length = length;
        if(length){
            if (length < 50) {
                this.sizeClass = 'tiny';
            } else if (length >= 50 && length < 100){
                this.sizeClass = 'small';
            } else if (length >= 100 && length < 150) {
                this.sizeClass = 'normal';
            } else if (length >= 150 && length < 200) {
                this.sizeClass = 'big';
            } else if (length >= 200) {
                this.sizeClass = 'huge';
            }
        } else {
            this.sizeClass = normal;
        }
    }
}


const park1 = Controller.createPark('Park 1', 1968, 500, 200);
const park2 = Controller.createPark('Park 2', 1987, 1200, 450);
const park3 = Controller.createPark('Park 3', 2001, 800, 310);

const street1 = Controller.createStreet('Street 1',1951,49);
const street2 = Controller.createStreet('Street 2', 1989, 102);
const street3 = Controller.createStreet('Street 3', 2002, 153);
const street4 = Controller.createStreet('Street 4', 1964, 205);

Controller.fullReport();

