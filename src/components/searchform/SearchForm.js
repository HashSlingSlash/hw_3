import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
      super(props);

      this._handleNameChange = this._handleNameChange.bind(this);
      this._handleDietChange = this._handleDietChange.bind(this);
      this._handleTimeChange = this._handleTimeChange.bind(this);
      this._handleMethodChange = this._handleMethodChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    _handleDietChange(event){
        this.props.onDietChange(event.target.value);
    }

    _handleTimeChange(event){
        this.props.onTimeChange(event.target.value);
    }

    _handleMethodChange(event){
        this.props.onMethodChange(event.target.value);
    }

    _handleSubmit(event){
        this.props.handleSubmit(event);
    }
  
    render() {
      return (
        <div className="searchSection">
            <h1>What would you like to eat?</h1>
            <p>Search our database for delicious recipes</p>
            <form onSubmit={this._handleSubmit}>
                <label>Title: 
                    <input id="title" type="text" className="searchBar" 
                    placeholder="Search..."
                    onChange={this._handleNameChange}
                    />
                </label>
                <label>Diet:
                    <select onChange={this._handleDietChange}>
                        <option value="Low-Sodium">Low-Sodium</option>
                        <option value="Low-Carb">Low-Carb</option>
                        <option value="Balanced">Balanced</option>
                        <option value="Medium-Carb">Medium-Carb</option>
                        <option value="Low-Fat">Low-Fat</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="High-Carb">High-Carb</option>
                    </select>
                </label>
                <label>Prep time (minutes):  
                    <select onChange={this._handleTimeChange}>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="80">80</option>
                        <option value="195">195</option>
                        <option value="360">360</option>
                    </select>
                </label>
                <label>Cooking method:  
                    <select onChange={this._handleMethodChange}>
                        <option value="baking">Baking</option>
                        <option value="pan frying">Pan Frying</option>
                        <option value="grilling">Grilling</option>
                        <option value="N/A">No cooking required</option>
                    </select>
                </label>
                <button onClick={this._handleSubmit}>Submit</button>
            </form>
        </div>
      );
    }
  }

  export default SearchForm;