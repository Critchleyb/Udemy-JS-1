// Global app controller

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from "./models/List";
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from "./views/listView";
import { elements, renderLoader, clearLoader } from './views/base';

/*Global State of the the app
* - Search Object
* - Current recipe Object
* - Shopping list Object
* - Liked recipes
*/
const state = {};
window.state = state;

/**************************
    SEARCH CONTROLLER
**************************/
const controlSearch = async () => {
    // 1. Get Query from view
    const query = searchView.getInput();
    //TESTING
    // const query = 'pizza';

    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults);

        try {
            // 4. Search for recipes
            await state.search.getResults();

            // 5. Render results on UI     
            searchView.renderResults(state.search.result);
            clearLoader();
        } catch(error) {
            alert('Error proccesing search');
            console.log(error);
            clearLoader();
        }

        
    }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//TESTING
// window.addEventListener('load', e => {
//     e.preventDefault();
//     controlSearch();
// });

elements.searchResultPages.addEventListener('click', e => {
    const button = e.target.closest('.btn-inline');
    if (button) {
        const goToPage = parseInt(button.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**************************
    RECIPE CONTROLLER
**************************/

const controlRecipe = async () => {
    // GET ID FROM URL
    const id = window.location.hash.replace('#','');
    console.log(id);

    if (id) {
        //Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);

        //Create new recipe object
        state.recipe = new Recipe(id);

        //TESTING
        // window.r = state.recipe;

        try {
            //Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
        } catch(error) {
            alert('Error processing recipe');
            console.log(error);
        }

        //Render recipe
        clearLoader();
        recipeView.renderRecipe(state.recipe);
    }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**************************
    LIST CONTROLLER
**************************/
const controlList = () => {
    // Create a new list if there is none yet
    if (!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count,el.unit,el.ingredient);
        listView.renderItem(item);
    });
};

//Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //Delete Button
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        //Remove from state
        state.list.deleteItem(id);
        //Remove from UI
        listView.deleteItem(id);

    //Update the counts
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);
    };
});


//Handling Recipe Button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        //Decrease button is clicked
        if (state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        //Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    }
});