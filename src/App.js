import logo from "./logo.svg";
import React, { Component } from "react";
import styles from "./App.css";
const {create, all} = require  ('mathjs')

const config = {
    number: 'BigNumber',
    precision: 20
}

const math = create(all, config)

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            stack: [],
            log: [],
            symbolStack: [],
            clearAfter: false,
        };

        this.addToStack = this.addToStack.bind(this);
        this.addToLog = this.addToLog.bind(this);
        this.solve = this.solve.bind(this);
        this.getSolution = this.getSolution.bind(this);
        this.convertToString = this.convertToString.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);

    } 

    updateDisplay(char, isSolving) {

        if(isSolving) {
            document.getElementById('display').innerHTML = char;
            this.setState({clearAfter: true});
        }
        else {
            var displayText ='';
            if (this.state.clearAfter) {
                document.getElementById('display').innerHTML = char;
                this.setState({clearAfter: false});
            }
            else {
                displayText = document.getElementById('display').innerHTML;
                displayText += char;
                document.getElementById('display').innerHTML = displayText;
            }
        }
    }

    updateDisplaySolution(char) {
        document.getElementById('')
    }



    addToStack(num) {
        this.state.stack.push(num)
        this.updateDisplay(num,false)
        console.log(this.state.stack)
    }

    //logs the entire array onto logStack AND logs symbols onto the symbolStack
    addToLog(symbol) {
        this.state.log.push(this.state.stack)
        this.state.symbolStack.push(symbol)
        console.log(this.state.log)
        this.updateDisplay(symbol, false)

        //clear list
        var emptyList = []
        this.setState({ stack: emptyList })
    }

    getSolution(num1, num2, symbol) {
        var intOne ='';
        var intTwo ='';
        var solution;

        if(symbol  == '+') {
            intOne = this.convertToString(num1);      
            intTwo = this.convertToString(num2);
            console.log('adding: ... ' + intOne + ' + ' + intTwo + '=' + math.add(intOne, intTwo));
            solution = math.add(intOne, intTwo);

        }

        else if(symbol == '-') {
            intOne = this.convertToString(num1);
            intTwo = this.convertToString(num2);
            //console.log(math.subtract(intOne, intTwo));
            solution = math.subtract(intOne,intTwo);
        }

        else if(symbol == '*') {
            //TODO Mulitplication (later verision)
        }

        else if(symbol == '/') {
            //TODO division (later version)
        }

        return solution;
    }



    convertToString(num) {
        var string = '';
        console.log(num);
        while(num.length > 0) {
            string += String(num.shift())
        }
        return string;
    }

    //Equal symbol pressed, solve the given problem 
    solve(){
        //gets 2 numbers and a symbol popped from symbol stack
        var num1, num2 = new Array()

        
        num1 = this.state.log.pop();
        
        if(this.state.log.length === 0) {
            num2 =  this.state.stack;
        }
        else {
            num2 = this.state.log.pop();
            this.state.log.push(this.state.stack);
        }

     

        var symbol = this.state.symbolStack.pop()
        //console.log(num1 + ' '+ symbol + 'here '+ num2 )
        var solution = this.getSolution(num1, num2, symbol);

        while (this.state.log.length > 0) {
            console.log(this.state.log.length + ' log length')
            num1 = this.state.log.pop();
            symbol = this.state.symbolStack.pop();
            console.log(num1 + ' '+ symbol + ' d'+ solution);
            var arr  =  [solution];
            solution = this.getSolution(num1, arr, symbol);
            console.log(solution);
        }

        this.updateDisplay(solution,true);
    }
  
    render() {
        return (
            <div className="page">
                <div className=''>
                    <Display/>
                    <LayoutOne addToStack={this.addToStack}/>
                </div>
                <LayoutTwo addToStack={this.addToStack}/>
                <LayoutThree addToStack={this.addToStack}/>
                <LayoutFour symbol={this.addToLog} solve={this.solve}/> 
                </div>
        );
    }
}


const Display = ({updateDisplay}) => 
    <div className='Display'>
        <Label>

        </Label>
    </div>





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


const Label = ({id , className='', children}) =>
    <label
        id='display'
        className={className}
        type="text"
        >
            {children}
    </label>





export default App; //The name of the class that extends to component that you'll be displaying
