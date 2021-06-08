import logo from "./logo.svg";
import React, { Component } from "react";
import styles from "./App.css";


class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            stack: [],
            log: [],
            symbolStack: [],
        };

        this.addToStack = this.addToStack.bind(this);
        this.addToLog = this.addToLog.bind(this);


    } 

    addToStack(num) {
        this.state.stack.push(num)
        console.log(this.state.stack)
    }

    addToLog(symbol) {
        this.state.log.push(this.state.stack)
        this.state.symbolStack.push(symbol)
        console.log(this.state.log)
        //TODO clear out stack this.state.stack.splice(0, this.stack.stack.length())
    }
  
    render() {
        return (
            <div className="page">
                <div className=''>
                    <LayoutOne addToStack={this.addToStack}/>
                </div>
                <LayoutTwo addToStack={this.addToStack}/>
                <LayoutThree addToStack={this.addToStack}/>
                <LayoutFour symbol={this.addToLog} solve={this.addToLog}/> 
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

const LayoutFour = ({symbol, solve}) =>
    <div className='layout4'>
        <Button onClick={() => symbol()}
        >
            -
        </Button>

        <Button onClick={() => symbol()}>
            +
        </Button>

        <Button onClick={() => solve()}>
            =
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
