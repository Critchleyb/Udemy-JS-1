///////////////////////////////////////
// Lecture: Hoisting

/*

calculateAge(1993); //This works as function is already available
// retirement(1993);

function calculateAge(year) { //This can be called at any point, even before it is executed in the code
    console.log(2020-year);
}

var retirement = function(year) { //This one cant be called until it is executed in the code
    console.log(65- (2020-year));
}

// Variables

console.log(age); //Variable undefined at this point;
var age = 26; //It is defined here
console.log(age); //It is now 26

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()   
    }
}

function third() { //This doesn't work unless it is placed inside the second function, as it doesnt have access to b or c because of the scope chain.
    var d = 'John';
    console.log(a + b + c + d);
}

*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

/*

calculateAge(1993);

function calculateAge(year) {
    console.log(2020-year);
    console.log(this);
}

*/

var john = {
    name: 'John',
    dob: 1990,
    calculateAge: function() {
        console.log(this);
        innerFunction();

        function innerFunction() {
            console.log(this);
        }
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    dob: 1984,

};

mike.calculateAge = john.calculateAge; //function borrowing, treating the method as a variable and passing it to mike.
mike.calculateAge();






