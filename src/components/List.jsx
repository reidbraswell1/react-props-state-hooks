import React from "react";
import { useState } from "react";

// Functional Component Method
function List(props)  {

    console.log(`---Begin function List()---`);
    // Destructuring
    const {id, text} = props;

    return (<li className="list-group-item" id={id}>{text}</li>)   
}
export default List;