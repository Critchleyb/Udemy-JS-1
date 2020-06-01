// Global app controller

import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/*Global State of the the app
* - Search Object
* - Current recipe Object
* - Shopping list Object
* - Liked recipes
*/
const state = {};

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
        console.log(state.recipe);
    }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
