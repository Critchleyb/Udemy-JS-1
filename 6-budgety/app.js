

// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp:[],
            inc:[]
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    var calculateTotal = function(type) {
        var sum = 0;
        
        data.allItems[type].forEach(function(element){
            sum += element.value;
        });

        data.totals[type] = sum;
    };

    return {
        addItem: function(type,des,val) {
            var newItem;

            //CREATE NEW ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //CREATE NEW ITEM BASED ON 'inc' OR 'exp' TYPE
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID,des,val);
            }

            //PUSH IT INTO OUR DATA STRUCTURE
            data.allItems[type].push(newItem);

            //RETURN THE NEW ELEMENT
            return newItem;
        },

        deleteItem: function(type,ID) {
            var ids, index;

            // id = 3

            ids = data.allItems[type].map(function(current) { // .map() creates a new array of length allItems[type] with the specified value in each index
                return current.id;
            });

            index = ids.indexOf(ID);

            if (index !== -1) {
                data.allItems[type].splice(index, 1); //REMOVES AN ITEM AT (INDEX,NUMBEROFITEMS)
            }
        },

        calculateBudget: function() {

            // CALCULATE TOTAL INCOME AND EXPENSES
            calculateTotal('exp');
            calculateTotal('inc');

            //  CALCULATE THE BUDGET: INCOME - EXPENSES
            data.budget = data.totals.inc - data.totals.exp;

            // CALCULATE THE PERCENTAGE OF INCOME THAT WE SPENT
            if (data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
            
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function() {
            return data;
        }
    };

})();

//UI CONTROLLER
var UIController = (function() { 

    var DOMstrings = { //PUBLIC via getDOMstrings method
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeList: '.income__list',
        expensesList: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //WILL BE EITHER inc OR exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value) //parseFloat converts the string to a float.
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeList;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesList;
                html = '<div div class="item clearfix" id = "exp-%id%" ><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        },

        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID)
            el.parentNode.removeChild(el);
        },

        clearFields: function () {
            var fields, fieldsArr;
            
            //QUERY SELECTOR ALL RETURNS A LIST OF ITEMS
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            //THE ARRAY PROTOTYPE SLICE CHANGES THE LIST TO AN ARRAY, WE HAVE TO USE THE CALL AS FIELDS IS A LIST NOT AN ARRAY
            fieldsArr = Array.prototype.slice.call(fields);

            //LOOP THROUGH ARRAY, SET VALUE BACK TO EMPTY
            fieldsArr.forEach(function(current,index,array) { //IN A FOR EACH LOOP, YOU CAN ACCESS THE CURRENT ITEM,INDEX,AND THEN THE FULL ARRAY
                current.value = "";
            });

            //SET FOCUS BACK TO DESCRIPTION FIELD
            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {

            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '--%'
            }
            
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();



//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){ //THIS IS AN INTERFACE BETWEEN THE PRIVATE MODULES

    var setupEventListners = function() {

        //GETS THE DOMstrings from UIController to use in this module
        var DOMstrings = UICtrl.getDOMstrings(); 

        //WHEN THE ADD BUTTON CLICKED
        document.querySelector(DOMstrings.inputButton).addEventListener('click', ctrlAddItem);

        //WHEN THE RETURN KEY IS PRESSED
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOMstrings.container).addEventListener('click', ctrlDeleteItem);
    };

    var updateBudget = function() {

        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
    };

    //CALLED WHEN ADD BUTTON IS CLICKED OR RETURN KEY IS KEYDOWN
    var ctrlAddItem = function() {
        
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //DATA VALIDATION

            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and Update Budget
            updateBudget();
        } 

    };

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID) {

            splitID = itemID.split('-'); //SPLITS A STRING INTO AN ARRAY AND REMOVES THE SPLIT CHAR - EXAMPLE - inc-1
            type = splitID[0];  // EXMAPLE - inc
            ID = parseInt(splitID[1]); //EXAMPLE - 1
        }

        // 1. delete the item from the data structure
        budgetCtrl.deleteItem(type,ID);

        // 2. delete the item from the UI
        UICtrl.deleteListItem(itemID);

        // 3. Update and show the new budget
        updateBudget();
    }
    
    
    return {
        init: function(){
            console.log('Application has started.');
            setupEventListners();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    }

})(budgetController,UIController);

controller.init();