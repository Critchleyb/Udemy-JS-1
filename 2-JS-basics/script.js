/***********************
VARIABLES AND DATA TYPES
***********************/

/*
var firstName = 'Ben';
console.log(firstName);

var lastName = 'Critchley';
var age = 26;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Developer';
console.log(job);

job = null;
console.log(job);
*/

/***********************
VARIABLES MUTATION AND TYPE COERCION
***********************/

/*
//type coercion
var firstName = 'Ben';
var age = 26;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'developer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty six';
alert('This is a JS alert, my age is ' + age)

var lastName = prompt('What is your last name?');
console.log(lastName);
*/

/***********************
BASIC OPERATORS
***********************/
/*
var year, yearBen, ageBen, ageMark;

var ageMark = 20;
var ageBen = 26;
var year = 2020;
var yearBen = year - ageBen;

console.log(yearBen);

//Logical Operators
var benOlder = ageBen > ageMark;
console.log(benOlder);

// typeof operator
console.log(typeof benOlder); //Shows the type of a variable
*/

/***********************
Operator Precedence
***********************/

/*

var now, yearBen, fullAge;

now = 2020;
yearBen = 1993;
fullAge = 18;

//Multiple operators
var isFullAge = now - yearBen >= fullAge;
console.log(isFullAge);

var ageBen = now - yearBen;
var ageMark = 35;


//grouping
var average = (ageBen + ageMark) / 2;
console.log(average);

//multiple assignments
var x,y;

x = y = (3+5)*4-6; // assignment operator works right to left, so both variables get set to 26 here
console.log(x, y);

// more operators
x = x * 2;
x *= 2; //shorthand, works with + - or *

*/

//CHALLENGE

/*
var markHeight, johnHeight, markMass, johnMass;

markHeight = 1.83;
johnHeight = 1.75;

markMass = 60;
johnMass = 90;

markBMI = markMass / (markHeight*markHeight);
johnBMI = johnMass / (johnHeight*johnHeight);
console.log(markBMI,johnBMI)

markBmiGreater = markBMI > johnBMI;

console.log('Is Mark\'s BMI greater than John\'s BMI? ' + markBmiGreater);
*/

//IF ELSE
/*
var firstName = 'Ben';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married')
} else {
    console.log(firstName + ' is not married')
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married')
} else {
    console.log(firstName + ' is not married')
}

var age = 17;

if (age < 13) {
    console.log(firstName + ' is a boy at ' + age)
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teen at ' + age)
} else {
    console.log(firstName + ' is an adult at ' + age)
}
*/
// TERNARY / SWICTH

/*
//TERNARY OPERATORS
var firstName = 'John';
var age = 16;

age >= 18 ?     console.log(firstName + ' drinks beer') 
        :       console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//SWITCH STATEMENT

var job = 'driver';

switch(job) {
    case 'developer':
        console.log(firstName + ' is a developer for fun');
        break;
    case 'driver':
    case 'taxi':
        console.log(firstName + ' drives people places');
        break;
    case 'designer':
        console.log(firstName + ' designs stuff')
        break;
    default:
        console.log(firstName + ' I don\'t know about your job')
} 

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy at ' + age);
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teen at ' + age);
        break;
    default:
        console.log(firstName + ' is an adult at ' + age);
} 

//truthy and falsy

// falsy: undefined, null, 0 , '', NaN
//truthy: not falsy values

var height;

height = 0;

if(height || height === 0) {
    console.log ('var defined');
} else {
    console.log('var not defined');
}

//equality operators. == works even if the variable type does not match. Example 0 int compared with '0' string. === does not do this.
if (height == '0') {
    console.log('the == operator does type cooercion')
}
*/
/*

//CHALLENGE 2

var jScore, mScore, maScore;

jScore = [89, 120, 103];
mScore = [116, 94, 123];
maScore = [97, 134, 105];

var jAvg = (jScore[0] + jScore[1] + jScore[2]) / 3;
var mAvg = (mScore[0] + mScore[1] + mScore[2]) / 3;
var maAvg = (maScore[0] + maScore[1] + maScore[2]) / 3;

if (jAvg > mAvg && jAvg > maAvg) {
    console.log('John wins with '+ jAvg);
} else if (mAvg > jAvg && mAvg > maAvg) {
    console.log('Mike wins with ' + mAvg);
} else if (maAvg > jAvg && maAvg > mAvg) {
    console.log('Mary wins with ' + maAvg);
} else { 
    console.log('tie with ' + jAvg);
}
*/
//FUNCTIONS
/*
function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1993);
console.log(ageJohn);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is already retired');
    }
}

yearsUntilRetirement(1993,'Ben');
yearsUntilRetirement(1965, 'Nat');
*/

//FUNCTION DECLERATION
// function whatDoYouDo(job, firstName){

// }


//FUNCTION EXPRESSION
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids';
        case 'driver':
            return firstName + 'drives';
        case 'designer':
            return firstName + 'designs';
        default:
            return firstName + 'I don\'t know your job'
    }
}
console.log(whatDoYouDo('teacher','John'))
*/

//ARRAYS
/*
var names = ['John', 'Mike', 'Mary'];
var years = new Array(1990,1960,1948);

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
console.log(names[1]);

names[names.length] = 'Jane';
console.log(names[3]);

//DIFFERENT DATA TYPES

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue'); //adds an item to the END of the array
john.unshift('Mr'); //adds an item to the START of the array
console.log(john);
john.pop(); //removes an item from the END of the array
john.shift(); //remove an item from the START of the array
console.log(john);
console.log(john.indexOf(1990)); //returns which position the item you pass in is in the array

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

//CHALLENGE 3
/*
var tip = [];
var total = [];

function calculateTip(bill){
    if (bill < 50) {
        tipAmount = calculateTipAmount(bill,.2);
    } else if (bill >= 50 && bill < 200) {
        tipAmount = calculateTipAmount(bill,.15);
    } else {
        tipAmount = calculateTipAmount(bill,.1);
    }

    tip.push(tipAmount);
    total.push(tipAmount+bill);
    console.log(tipAmount + ' tip amount');
    console.log(tipAmount+bill + ' bill amount');
}

function calculateTipAmount(bill,percentage){
    return bill * percentage;
}

calculateTip(124);
calculateTip(48);
calculateTip(268);

console.log(tip,total);
*/

//OBJECTS
/*
//object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john.job,john.isMarried);

//new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane.lastName = 'Smith';
console.log(jane);
*/
//METHODS
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

var age = console.log(john.calcAge());

john.calcAge();
console.log(john)
*/

//CHALLENGE 4
/*
var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    height: 1.83,
    mass: 63,
    calcBMI: function(){
        this.BMI = this.mass / (this.height*this.height);
        console.log(this.firstName+'\'s BMI Calculated as ' + this.BMI);
        return this.BMI;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Peters',
    height: 1.9,
    mass: 73,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        console.log(this.firstName + '\'s BMI Calculated as ' + this.BMI);
        return this.BMI;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.firstName+' '+mark.lastName+' has the higher BMI of '+mark.BMI);
} else if (john.BMI > mark.BMI) {
    console.log(john.firstName + ' ' + john.lastName + ' has the higher BMI of ' + john.BMI)
} else {
    console.log('TIED BMI WITH ' + john.BMI);
}
*/

//LOOPS

/*
for (var i = 0; i < 10; i++ ){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}


var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

//Continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/

//CHALLENGE 5

var john = {
    bills: [124,48,268,180,42],
    tips: [],
    totals: [],
    calc: function(){
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                this.tips[i] = this.bills[i] * 0.15;
            } else {
                this.tips[i] = this.bills[i] * 0.1;
            }
            this.totals[i] = this.bills[i] + this.tips[i];
        }
    }
}

var mark = {
    bills: [77, 475, 110, 45],
    tips: [],
    totals: [],
    calc: function () {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips[i] = this.bills[i] * 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                this.tips[i] = this.bills[i] * 0.1;
            } else {
                this.tips[i] = this.bills[i] * 0.25;
            }
            this.totals[i] = this.bills[i] + this.tips[i];
        }
    }
}

john.calc();
mark.calc();


function calcAvg(bills){
    var total = 0;
    for (var i = 0; i < bills.length; i++) {
        total += bills[i];
    }
    return total / bills.length;
}

john.avgTip = calcAvg(john.tips);
mark.avgTip = calcAvg(mark.tips);

if (john.avgTip > mark.avgTip) {
    console.log('John has the higher tip average of '+john.avgTip);
} else if (mark.avgTip > john.avgTip) {
    console.log('Mark has the higher tip average of ' + mark.avgTip);
} else {
    console.log('Both tip averages are the same, '+ john.avgTip);
}