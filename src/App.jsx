import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";

function App(props) {

    console.log(`---Begin function App()---`);

    const [ list, setList ] = useState(["ready", "set", "GO"]);
    const [ text, setText ] = useState("");
    const [ prevText, setPrevText ] = useState("");

    useEffect(function () {
      console.log(`---Begin useEffect()---`);
      console.log(`Prev Text = ${prevText}, Curr Text = ${text}`);
      setPrevText(text);
      console.log(`---End useEffect()---`);
    },[text])

  // Input onChange event handler
  function handleOnChangeInput(event) {
    console.log(`---Begin handleOnChangeInput()---`);
    setText(event.target.value);
    console.log(`---End handleOnChangeInput()---`)
  }
    
  // Submit button event handler
  function onSubmit(event) {
    console.log(`---Begin onSubmit()---`);
    let buttonValue = event.target.value;
    event.preventDefault();
    
    switch (buttonValue) {
      case "Add":
        // Don't process empty string
        if (!text || text.length === 0) {
          console.log(`Empty String`);
        }
        else {
          // Must use a new array
          let newList = list.slice(0);
          newList.push(text);
          // Clear text so that it won't be displayed on subsequent add
          setList(newList);
          setText("");
        }
        break;
      case "Delete":
        if(!text || text.length === 0) {
          console.log(`Empty String`);
        }
        else {
          let newList = [];
          let deleteIndex = parseInt(text);
          for(let i=0; i < list.length; i++) {
            if(deleteIndex !== (i + 1)) {
              newList.push(list[i]);
            }
          }
          // Clear text so that it won't be displayed on subsequent add
          setList(newList);
          setText("");
        }
        break; 
      default: 
        console.log(`Invalid Button value = ${buttonValue}`);
        break;
    }
    console.log(`---End onSubmit()---`);
  }

  return (
    <div className="row">
      <div className="col text-center mt-3">
        <h1>React State and Props Hooks</h1>
      </div>
      <div className="row">
        <div className="col-3" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
          <form onClick={onSubmit}>
          <p>To delete an item enter it's number only!</p>
            <div className="form-group">
              <label htmlFor="toDoInput">Add to do item </label>
              <input id="toDoInput" className="mb-1 form-control" value={text} onChange={handleOnChangeInput}></input>
              <button className="m-2 btn btn-primary" type="submit" name="Add" value="Add">Add</button>
              <button className="m-2 btn btn-danger" type="submit" name="Delete" value="Delete">Delete</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>To Do List</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-3 border border-primary rounded mt-4" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
          <ul className="list-group mt-2 mb-2">
            {list.map((value,index, array) => {
              let listId = `List:${index}`;
              let listText = `(${index+1}.) ${value}`;
              return <List key={index} id={listId} text={listText}></List>
            })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );

  }
export default App;