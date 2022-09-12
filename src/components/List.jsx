import React from "react";

// Functional Component Method
function List(props)  {

    console.log(`---Begin function List()---`);
    // Destructuring
    const { list } = props;

    return (<ul className="list-group mt-2 mb-2">
                { list.map((value,index, array) => {
                    let listId = `List:${index}`;
                    let listText = `(${index+1}.) ${value}`;
                       return (<li className="list-group-item" key={listId} id={listId}>{listText}</li>)
                })}
            </ul>)   
}
export default List;