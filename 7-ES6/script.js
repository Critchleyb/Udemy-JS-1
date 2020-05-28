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

//test