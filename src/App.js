import logo from "./logo.svg";
import React, { Component } from "react";
import styles from "./App.css";

var stack = {};

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            stack,
        };

        this.addToStack = this.addToStack.bind(this);

    } 

    addToStack(num) {
        
        var updatedStack = []

        updatedStack.push(num)

        //trying to figure out how to add to stack data when button pressed
        this.setState({ stack: [num, this.state.stack]})

        console.log(stack)
    }
  
    render() {
        return (
            <div className="page">
                <div className=''>
                    <LayoutOne addToStack={this.addToStack}/>
                </div>
                <LayoutTwo addToStack={this.addToStack}/>
                <LayoutThree addToStack={this.addToStack}/>
                </div>
        );
    }
}



const LayoutOne = ({addToStack}) =>
        <div className ="button1">


        <Button onClick={() => addToStack(7)}
        >
            7
        </Button>

        <Button onClick={() => addToStack(8)}
        >
            8
        </Button>

        <Button onClick={() => addToStack(9)}
        >
            9
        </Button>

        </div>



const LayoutTwo = ({addToStack}) =>
    <div className = 'layout2'>

        <Button onClick={() => addToStack(4)}
        >
            4
        </Button>

        <Button onClick={() => addToStack(5)}
        >
            5
        </Button>

        <Button onClick={() => addToStack(6)}
        className='3'
        >
            6
        </Button>

    </div> 

const LayoutThree = ({addToStack}) =>
    <div className = 'layout3'>

        <Button onClick={() => addToStack(1)}
        >
            1
        </Button>

        <Button onClick={() => addToStack(2)}
        >
            2
        </Button>

        <Button onClick={() => addToStack(3)}
        >
            3
        </Button>

    </div> 

 

 const Button = ({onClick, className= '', children}) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
        >
        {children}
        </button>

    



export default App; //The name of the class that extends to component that you'll be displaying
