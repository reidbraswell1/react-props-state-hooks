import React from "react";
import { useState } from "react";

// Functional Component Method
List(props)  {
    // Destructuring
    const {id, text} = this.props;
    return (<li className="list-group-item" id={id}>{text}</li>)   
}
export default List;