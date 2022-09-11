
import "./css/App.css";
import { Component } from "react";
import "./App.css";
import React from "react";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
  constructor(props) {
    super(props)

    const list = ["ready", "set", "GO"];
    const text = "";

    // Set initial state
    this.state = {
      list: list,
      text: text,
    }

    // Bind functions
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Input onChange event handler
  handleOnChangeInput(event) {
    console.log(`---Begin handleOnChangeInput()---`);
    this.setState({text:event.target.value});
    console.log(`---End handleOnChangeInput()---`)
  }

  // Submit button event handler
  onSubmit(event) {
    console.log(`---Begin onSubmit()---`);
    let buttonValue = event.target.value;
    event.preventDefault();

    // Destructuring state
    const { text } = this.state;
    
    switch (buttonValue) {
      case "Add":
        // Don't process empty string
        if (!text || text.length === 0) {
          console.log(`Empty String`);
        }
        else {
          // Must use a new array
          let newList = this.state.list.slice(0);
          newList.push(this.state.text);
          // Clear text so that it won't be displayed on subsequent add
          this.setState({list:newList, text:""});
        }
        break;
      case "Delete":
        if(!this.state.text || this.state.text.length === 0) {
          console.log(`Empty String`);
        }
        else {
          let newList = [];
          let deleteIndex = parseInt(this.state.text);
          for(let i=0; i < this.state.list.length; i++) {
            if(deleteIndex !== (i + 1)) {
              newList.push(this.state.list[i]);
            }
          }
          // Clear text so that it won't be displayed on subsequent add
          this.setState({list:newList, text:""});
        }
        break; 
      default: 
        console.log(`Invalid Button value ${buttonValue}`);
        break;
    }
    console.log(`---End onSubmit()---`);
  }

  render() {
    return (
      <div className="row">
        <div className="col text-center mt-3">
          <h1>React State and Props</h1>
        </div>
        <div className="row">
          <div className="col-3" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
            <form onClick={this.onSubmit}>
            <p>To delete an item enter it's number only!</p>
              <div className="form-group">
                <label htmlFor="toDoInput">Add to do item </label>
                <input id="toDoInput" className="mb-1 form-control" value={this.state.text} onChange={this.handleOnChangeInput}></input>
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
              {this.state.list.map((value,index, array) => {
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
}
export default App;