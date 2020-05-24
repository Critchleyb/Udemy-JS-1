////////////////////////////////////////////////////
//FUNCTION CONSTRUCTOR

/*

var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function(name,yearOfBirth,job) { //USE THE CONSTRUCTOR FOR UNIQUE DETAILS
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

Person.prototype.calculateAge = function () { //USE THE PROTOTYPE PROPERTY FOR SHARED STUFF, SO THAT THEY DON'T GET DUPLICATED ON EVERY INSTANTIATION
    console.log(2020 - this.yearOfBirth); }

Person.prototype.lastName = 'Smith';


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');

john.calculateAge();
console.log(john.lastName);

*/



////////////////////////////////////////////////////
//OBJECT.CREATE METHOD

/*

var personProto = {
    calculateAge: function() { console.log(2020 - this.yearOfBirth); }
};

var john = Object.create(personProto); //CREATES AN EMPTY OBJECT THEN FILLS
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, //CREATES AN OBJECTED WITH THE STATED PROPERTIES
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    });

*/




////////////////////////////////////////////////////
// PRIMITIVES vs OBJECTS

/*

//primitives
var a = 25;
var b = a;
a = 46;
console.log(a,b); //RESULTS IN 25,46


//Objects
var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age); //RESULTS IN BOTH SHOWING 30, AS THEY BOTH JUST POINT THE THE OBJECT AND DON'T STORE THE DATA THEMSELVES

//FUNCTIONS

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b) {
    a = 30;
    b.city = 'San Fran';
}

change(age, obj);

console.log(age); //THIS COMES OUT AS 27, IT WAS NOT CHANGED, A COPY OF THE PRIMITIVE WAS MADE
console.log(obj.city); //THIS WAS CHANGED, AS THERE IS ONLY ONE INSTANCE OF THE OBJECT AND THE FUNCTION CHANGED IT

*/





////////////////////////////////////////////////////
//PASSING FUNCTIONS AS ARGUMENTS

/*

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
    } else { return -1 };
}

var ages = arrayCalc(years,calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges);
var maxHeartRates = arrayCalc(ages,maxHeartRate);
console.log(maxHeartRates);

*/





////////////////////////////////////////////////////
//FUNCTIONS RETURNING FUNCTIONS - FIRST CLASS FUNCTIONS

/*

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name+'?');
        }
    } else {
        return function(name) {
            console.log('Hello '+name+', what do you do?') 
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Jonas');

interviewQuestion('teacher')('Mark'); //CALLS ONCE TO GET BACK THE FUNCTION, THEN AGAIN WITH THE RETURNED FUNCTION AND THE NAME;

*/





////////////////////////////////////////////////////
//IIFE - Immediately Invoked FUNCTION EXPRESSIONS

/*

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//YOU DONT NEED TO DECLARE A NAMED FUNCTION TO MAKE A PRIVATE VARIABLE LIKE ABOVE

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(2);

//THIS IS TREATED AS A STATEMENT, NOT A DECLERATION, THE () CALLS IT IMMEDIATLEY. THIS IS AN IIFE. IT CREATED DATA PRIVACY

*/

////////////////////////////////////////////////////
//CLOSURES

/*

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var usRetirement = retirement(66);
usRetirement(1993);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ' can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?')
        }
    }  
}

*/

/////////////////////////////////////////////////////////
//BIND CALL AND APPLY

/*

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m '+this.name+', I\'m a '+this.job+' and I\'m ' + this.age +' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice '+timeOfDay+'.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal','morning');

john.presentation.call(emily,'friendly','afternoon');

//john.presentation.apply(emily,['friendly','afternoon']); IF IT EXPECTS AND ARRAY

var johnFriendly = john.presentation.bind(john,'friendly'); //stores arguments in the variable with the function

johnFriendly('evening');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
console.log(fullJapan, ages);

*/

/////////////////////////////////////////////////////////
//CHALLENGE 7

// (function() {

// var Question = (function(question,answers,correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// });

// Question.prototype.askQuestion = (function() {
//     var selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
//     console.log(selectedQuestion.question);

//     selectedQuestion.answers.forEach(el => {
//         console.log(el);
//     });

//         var promptQuestion = function() {
//             var answer = prompt(selectedQuestion.question);
//             return answer;
//         }

//     var answer = promptQuestion();

//     if(answer === 'exit') { return -99999999;}
//     else if (answer == selectedQuestion.correctAnswer) {
//         console.log('Correct!');
//         return 1;
//     } else {
//         console.log('Incorrect');
//         return 0;
//     }
// });

// var questions = [
//     question0 = new Question('What is 1+1?', [0, 1, 2, 3], 2),
//     question1 = new Question('What is 1+2?', [0, 1, 2, 3], 3),
//     question2 = new Question('What is 3-2?', [0, 1, 2, 3], 1)
// ];

// for (i = 0; i > -1; i += Question.prototype.askQuestion()) {
//     console.log('Your score is ' + i);
// }

// })();

(function () {
    var score = 0;

    var Question = (function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    });

    Question.prototype.askQuestion = (function() {
        console.log(this.question);

        this.answers.forEach(el => {
            console.log(el);
        });

        var promptQuestion = function(question) {
            var answer = prompt(question);
            return answer;
        }

        var answer = promptQuestion(this.question);

        if (answer === 'exit') { console.log('Game Ended') }
        else if (answer == this.correctAnswer) {
            score++;
            console.log('Correct! Your Score is: '+score);
            question();
        } else {
            console.log('Incorrect, Your Score is: ' + score);
            question();
        }
    });

    var questions = [
        question0 = new Question('What is 1+1?', [0, 1, 2, 3], 2),
        question1 = new Question('What is 1+2?', [0, 1, 2, 3], 3),
        question2 = new Question('What is 3-2?', [0, 1, 2, 3], 1)
    ];

    function question() {
        var selectedQuestion = Math.floor(Math.random() * questions.length);
        questions[selectedQuestion].askQuestion();
    };
    
    question();
})();