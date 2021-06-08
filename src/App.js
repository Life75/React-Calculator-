import logo from "./logo.svg";
import React, { Component } from "react";
import styles from "./App.css";

const window = {};

class App extends Component {
  
    render() {
        return (
            <div className="page">
                <div className=''>
                    <CalculatorLayout/>
                </div>
                <LayoutOne/>
                </div>
        );
    }
}



const CalculatorLayout = () =>
        <div className ="button1">


        <Button onClick={() => console.log(1)}
        className="1"
        >
            7
        </Button>

        <Button onClick={() => console.log(2)}
        className='2'
        >
            8
        </Button>

        <Button onClick={() => console.log(3)}
        className='3'
        >
            9
        </Button>

        </div>



const LayoutOne = () =>
    <div className = 'layout2'>

        <Button onClick={() => console.log(1)}
        className="1"
        >
            5
        </Button>

        <Button onClick={() => console.log(2)}
        className='2'
        >
            8
        </Button>

        <Button onClick={() => console.log(3)}
        className='3'
        >
            9
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
