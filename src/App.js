
import React, { Component } from "react";
import "./App.css";
const {create, all} = require  ('mathjs')

//Calculator made using React by Austyn Washington 6/19/2021

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
            clearAfter: true,
            doubleSymbolSwitch: false,
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

    addToStack(num) {
        this.state.stack.push(num)
        this.updateDisplay(num,false)
        this.setState({doubleSymbolSwitch: false});
    }

    //logs the entire array onto logStack AND logs symbols onto the symbolStack
    addToLog(symbol) {
        if (!this.state.doubleSymbolSwitch) {
            this.state.log.push(this.state.stack)
            this.state.symbolStack.push(symbol)
            this.updateDisplay(symbol, false)
           
            //clear list
            var emptyList = []
            this.setState({ stack: emptyList, doubleSymbolSwitch: true })
        }
        
    }

    getSolution(num1, num2, symbol) {
        var intOne ='';
        var intTwo ='';
        var solution;
        intOne = this.convertToString(num1);      
        intTwo = this.convertToString(num2);

        if(symbol  === '+') solution = math.add(intOne, intTwo);
        else if(symbol === '-') solution = math.subtract(intOne,intTwo);
        else if(symbol ==='*') solution = math.multiply(intOne, intTwo);
        else if(symbol === '/') {
            solution = math.divide(intOne, intTwo);
            if(solution == 'Infinity') solution = 'error';
        } 
        
        return solution;
    }


    convertToString(num) {
        var string = '';

        while(num.length > 0) 
            string += String(num.shift())
        return string;
    }

    //Equal symbol pressed, solve the given problem 
    solve(){
        //gets 2 numbers and a symbol popped from symbol stack
        try {
            var num1, num2 = new Array()  
            num1 = this.state.log.pop();
            
            if(this.state.log.length === 0) {
                num2 = this.state.stack;
            }
            else {
                num2 = this.state.log.pop();
                this.state.log.push(this.state.stack);
            }

            var symbol = this.state.symbolStack.pop()
            var solution = this.getSolution(num1, num2, symbol);

            while (this.state.log.length > 0) {
                num1 = this.state.log.pop();
                symbol = this.state.symbolStack.pop();
                var arr  =  [solution];
                solution = this.getSolution(num1, arr, symbol);
            }

            this.updateDisplay(solution,true);
        }
        catch(err) {
            document.getElementById('display').innerHTML = 'error'
        }
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
                    <LayoutFour symbol={this.addToLog} addToStack={this.addToStack}/>
                    <LayoutFive symbol={this.addToLog} solve={this.solve}/>
                </div>
        );
    }
}

const Display = ({updateDisplay}) => 
    <div className='Display'>
        <Label>
            Calculator made in React by Austyn Washington
        </Label>
    </div>

const LayoutOne = ({addToStack}) =>
        <div className ="layout1">
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

const LayoutFour = ({symbol, addToStack}) =>
    <div className='layout4'>

        <Button onClick={() => addToStack(0)}
        >
            0
        </Button>

        <Button onClick={() => symbol('-')}
        >
            -
        </Button>

        <Button onClick={() => symbol('+')}>
            +
        </Button>

    </div>

const LayoutFive = ({symbol, solve}) =>
    <div className='layout5'>
        <Button onClick={() => symbol('*')}
        >
            *
        </Button>

        <Button onClick={() => symbol('/')}
        >
            ÷
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

export default App; 
