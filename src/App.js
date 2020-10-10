import React, { Component } from 'react';
import data from './recipe.json';
import './components/resultsection/ResultSection'
import './components/searchform/SearchForm'
import './App.css';
import ResultSection from './components/resultsection/ResultSection';
import SearchForm from './components/searchform/SearchForm';

class App extends Component{
  constructor(){
    super();
    this.state={
      recipeData:data,
      name:'',
      dietLabel: 'Low-Sodium',
      prepTime:15,
      cookingMethod:'baking',
      submitted:false,
      hasResult:false
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleDietChange = this._handleDietChange.bind(this);
    this._handleTimeChange = this._handleTimeChange.bind(this);
    this._handleMethodChange = this._handleMethodChange.bind(this);
  }

  _handleNameChange(name){
    this.setState({name:name});
  }

  _handleDietChange(diet){
    this.setState({dietLabel:diet});
  }

  _handleTimeChange(time){
    this.setState({prepTime:time});
  }

  _handleMethodChange(method){
    this.setState({cookingMethod:method});
  }

  _handleSubmit(event){
    
  }

  render(){
    return(
      <div className="App">
        <SearchForm onNameChange={this._handleNameChange} onDietChange={this._handleDietChange} onTimeChange={this._handleTimeChange} onMehtodChange={this._handleMethodChange} handleSubmit={this._handleSubmit}/>
        <ResultSection data={this.state.recipeData} submitted={this.state.submitted} hasResult={this.state.hasResult}/>
      </div>
    )
  }
}

export default App;
