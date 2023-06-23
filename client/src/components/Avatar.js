import React, { Component } from "react";
import img from "./vaibhav.jpg"
import "./Avator.css";
export class Avatar extends Component {
  render() {
    return (
      <div className="b">
        <figure>
          <img
            className="Avator"
            src={img}
            alt="Avatar"
          />
        <p className="name">Vaibhav Aher</p>
        </figure>
      </div>
    );
  }
}

export default Avatar;