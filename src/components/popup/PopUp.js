import React, { Component } from "react";
import './PopUp.css'

class PopUp extends Component {

  handleClick = () => {
   this.props.toggle();
  };

render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <button className="close" onClick={this.handleClick}>&times;</button>
     <p>Rating: {this.props.rating}/5</p>
     <p>{this.props.description}</p>
     <a href={this.props.url}>More info</a>
    </div>
   </div>
  );
 }
}

export default PopUp;