import React, { Component } from 'react';
import './App.css';
import recipesJSON from "./asset/data/recipe.json";
import Recipe from "./components/recipe/Recipe";
import { FaSearch } from 'react-icons/fa'


const recipes = recipesJSON.recipes;

let filteredRecipes;

class App extends Component{

  

  constructor(){
    super();
    this.search = React.createRef();
    this.dietType = React.createRef();
    this.prepTime = React.createRef();
    this.cookingMethod = React.createRef();

   this.state={
    enter:false
   }

    this._keyPressed = this._keyPressed.bind(this);
    this._goBack = this._goBack.bind(this);
  }

  _keyPressed(event){

    if(event.key === "Enter"){
      filteredRecipes = recipes.filter(
          (recipe) => {
            return recipe.title.toLowerCase().indexOf(this.search.current.value.toLowerCase()) !== -1;
          }
      );
      if(this.dietType.current.value !== "none"){
        filteredRecipes = filteredRecipes.filter(
          (recipe) => {
            return recipe.dietLabel.indexOf(this.dietType.current.value) !== -1;
          }
        );
      }
      if(this.cookingMethod.current.value !== "none"){
        filteredRecipes = filteredRecipes.filter(
          (recipe) => {
            return recipe.cookingMethod.indexOf(this.cookingMethod.current.value) !== -1;
          }
        );
      }

      if(this.prepTime.current.value !== "none"){
        filteredRecipes = filteredRecipes.filter(
          (recipe) => {
            if(this.prepTime.current.value === "30"){
              if(recipe.prepTime < 30){
                return true;
              }
            }
            if(this.prepTime.current.value === "60"){
              if(recipe.prepTime < 61 && recipe.prepTime > 29){
                return true;
              }
            }
            if(this.prepTime.current.value === "120"){
              if(recipe.prepTime < 121 && recipe.prepTime > 60){
                return true;
              }
            }
            if(this.prepTime.current.value === ">120"){
              if(recipe.prepTime > 120){
                return true;
              }
            }
            return false;
          }
        );
      }
      
      this.setState({
        enter: true
      });
    
    

    }
  }

  _goBack(event){
      this.setState({
        enter: false
      });
  }

  
  
  render(){
    if(!this.state.enter){
      return (
        <div className="App">
          <h1>What would you like to eat?</h1>
          <p>Search our database for delicious recipes</p>
          <p id="instructions">(Hit enter/go to search)</p>
          <div className = "searchSection">
            <input type="text" id="searchBar" 
            placeholder = "Search here. . ."
            ref = {this.search}
            onKeyPress = {this._keyPressed}/>
            <FaSearch id="searchIcon"/>
          </div>
  
          <div className = "optionsSection">
            <select ref = {this.dietType}>
              <option value="none">Diet Type</option>
              <option value="Low-Sodium">Low Sodium</option>
              <option value="Low-Fat">Low Fat</option>
              <option value="Low-Carb">Low Carb</option>
              <option value="Medium-Carb">Medium Carb</option>
              <option value="High-Carb">High Carb</option>
              <option value ="Balanced">Balanced</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
  
            <select ref = {this.prepTime}>
              <option value="none">Prep Time</option>
              <option value="30">Less than 30 min</option>
              <option value="60">30 - 60 min</option>
              <option value ="120">61 - 120 min</option>
              <option value=">120">More than 120 min</option>
            </select>
  
            <select ref = {this.cookingMethod}>
              <option value="none">Cooking Method</option>
              <option value="baking">Baking</option>
              <option value="pan frying">Pan Frying</option>
              <option value ="grilling">Grilling</option>
            </select>
          </div>
        </div>
      );
    }

    if(this.state.enter && filteredRecipes.length > 0){
      return (
        <div className="App">
          <div className = "results">
            <h3>We found {filteredRecipes.length} delicious recipe(s) for you!</h3>
            <p>(Click anywhere on each recipe for more info)</p>
            {filteredRecipes.map(recipe => {
              return <Recipe key= {recipe.title} recipe = {recipe} className="recipe" onClick={this._togglePop}/>
              })}
          </div>
          <div className = "goBack">
            <button onClick = {this._goBack}>Click here to search again.</button>
          </div> 
        </div>
      );
    }

    if(this.state.enter && filteredRecipes.length === 0){
      return (
        <div className="App">
          <p>Sorry we have no recipes that meet your criteria.</p>
          <div className = "goBack">
            <button onClick = {this._goBack}>Click here to search again.</button>
          </div> 
        </div>
      );
    }
  }
}
  

export default App;
