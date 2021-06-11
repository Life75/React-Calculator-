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
        this.solve = this.solve.bind(this);
        this.getSolution = this.getSolution.bind(this);
        this.padding = this.padding.bind(this);

    } 

    addToStack(num) {
        this.state.stack.push(num)
        console.log(this.state.stack)
    }

    //logs the entire array onto logStack AND logs symbols onto the symbolStack
    addToLog(symbol) {
        this.state.log.push(this.state.stack)
        this.state.symbolStack.push(symbol)
        console.log(this.state.log)

        //clear list
        var emptyList = []
        this.setState({ stack: emptyList })
    }//a

    padding(num1, num2, symbol) {
        //which is bigger 
        if(num1.length > num2.length) {
            console.log('1 is bigger length');

            var numDifference = (num1.length) - (num2.length);

            console.log(numDifference)

            for(var i=0; i < numDifference; i++) {
                num2.unshift(0)
            }

        }
        else if(num1.length < num2.length) {
            console.log('2 is bigger length');
          
            var numDifference = (num2.length) - (num1.length);

            console.log(numDifference)

            for(var i=0; i < numDifference; i++) {
                num1.unshift(0)
            }

        }
        else {
            console.log("default")
        }

        //this.getSolution(num1, num2, symbol)
    }

    getSolution(num1, num2, symbol) {

        if(symbol  == '+') {

            //TODO addition

        }

        else if(symbol == '-') {
            //Todo Subtraction
        }

        else if(symbol == '*') {
            //TODO Mulitplication (later verision)
        }

        else if(symbol == '/') {
            //TODO division (later version)
        }


    }

    //Equal symbol pressed, solve the given problem 
    solve(){
        //gets 2 numbers and a symbol popped from symbol stack
        
        //while(this.state.log.pop() != null)
        var num1, num2 = new Array()

        num1 = this.state.log.pop()
    

        if(this.state.log.pop() == null) {

            num2 =  this.state.stack
            
        }
        else {
            num2 = this.state.log.pop()
        }

        var symbol = this.state.symbolStack.pop()

        //console.log('here: ' + num1.valueOf())
        this.padding(num1, num2, symbol)
                
        
       //clear out contents completely 

        //console.log(num1 + ' '+ symbol + ' '+ num2 )
    }
  
    render() {
        return (
            <div className="page">
                <div className=''>
                    <LayoutOne addToStack={this.addToStack}/>
                </div>
                <LayoutTwo addToStack={this.addToStack}/>
                <LayoutThree addToStack={this.addToStack}/>
                <LayoutFour symbol={this.addToLog} solve={this.solve}/> 
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
        <Button onClick={() => symbol('-')}
        >
            -
        </Button>

        <Button onClick={() => symbol('+')}>
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
