import { Component } from "react";
import imgTwo from './add.png';
import imgThree from './trash.png';
import imgFour from './done.png';

export class ToDoList extends Component {
    state = {
        userInput: '',
        userList: []
    }
    onChangeEvent(event) {
        this.setState ({userInput: event})
    }
    addItem(input) {
        if (input === "") {
            alert ("Add item to your to do list!")
        }
        else {
            let myArray = this.state.userList;
            myArray.push(input);
            this.setState({userList: myArray, userInput: ''})
        }
    }
    crossItem(event) {
        const listItem = event.target;
        listItem.classList.toggle("done");
    }
    deleteList() {
        let myArray=this.state.userList;
        myArray = [];
        this.setState({userList: myArray})
    }
    formSubmit (event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="my-container">
                <form onSubmit={this.formSubmit} className="my-form">
                    <input className="my-input" type="text"
                    placeholder="Add to list..."
                    onChange={(event) => {this.onChangeEvent (event.target.value)}}
                    value={this.state.userInput}/>
                    <button className="add-btn" onClick={() => this.addItem (this.state.userInput)}><img src={imgTwo} width="60px" alt="Add"/></button>
                </form>
                <ul className="my-list">
                    {this.state.userList.map((item, index) => (
                        <li onClick = {this.crossItem} key = {index}><img src={imgFour} width="40px" alt="List Item"/>{item}</li>
                    ))}
                </ul>
                <div>
                    <button onClick={() => this.deleteList()} className="delete-btn"><img src={imgThree} width="80px" alt="Delete"/></button>
                </div>
            </div>
        )
    }
}