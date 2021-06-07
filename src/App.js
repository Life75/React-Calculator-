import logo from "./logo.svg";
import React, { Component } from "react";
import styles from "./App.css";

class App extends Component {
  
    render() {
        return (
            <div className="page">
            <CalculatorLayout />
            </div>
        )
    }
}

const CalculatorLayout = () => 
    <div className ="calculator-layout">
        <Button onClick={() => console.log(1)}
        className="button_1"
        >
            1
        </Button>

        <button 
            onClick={() => console.log(2)}
            className="button1"
            >
            2
            </button>
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
