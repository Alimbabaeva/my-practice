import React from "react";
import './App.css'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hour: "00",
            minute: "00",
            second: '00'
        }
        this.interval= null
    }
    startHandler = () => {
        //working with numbers
         this.interval=setInterval(()=>{
            if( +this.state.second === 9){
                this.setState({minute: +this.state.minute+1, second: 0})
            }
            else if(+this.state.minute ===9){
                this.setState({hour: +this.state.hour +1, minute:0})
            }  else {
                this.setState({second: +this.state.second +1})
            }
            //convert numbers into string;
            // this.setState({

            // })
            console.log(this.state, 'state')
         }, 1000)
    }
    pauseHandler = () => {
        clearInterval(this.interval)
    }
    resetHandler=() => {
       
    }
    render() {
        return (
            <div className="main">
                <div>hours:{this.state.hour} minutes:{this.state.minute} seconds:{this.state.second}</div>
                <div>
                    <button onClick={this.startHandler}>Start</button>
                    <button onClick={this.pauseHandler}>Pause</button>
                    <button onClick={this.resetHandler}>Reset</button>
                </div>

            </div>
        )
    }
}
export default App