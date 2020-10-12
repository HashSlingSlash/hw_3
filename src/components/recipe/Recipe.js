import React, { Component } from 'react';
import "./Recipe.css";
import PopUp from '../popup/PopUp'

class Recipe extends Component{

    constructor(){
        super();
    
       this.state={
        popup:false
       }

        this._togglePop = this._togglePop.bind(this);
      }
    

    _togglePop = () => {
        this.setState({
         popup: !this.state.popup
        });
       };
      
    render(){
        return(
            <div className = "recipe" onClick={this._togglePop}>
                {this.state.popup ? <PopUp toggle={this._togglePop} description={this.props.recipe.description} url={this.props.recipe.url} rating={this.props.recipe.rating}/> : null}
                <h4>{this.props.recipe.title}</h4>
                <img src={this.props.recipe.image} alt = {this.props.recipe.title}/>
                <p>Serving: {this.props.recipe.servings}</p>
                <p>Calories: {this.props.recipe.calories}</p>
            </div>
        );
    }
}

export default Recipe;