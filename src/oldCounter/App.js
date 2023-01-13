import React from "react";
import './App.css'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hour: "00",
            minute: "00",
            second: '00',
        }
        this.interval= null
    }
    startHandler = () => {
//avoiding doubling our interval when we hit start 2 times in a row
        if(this.interval !== null){
            clearInterval(this.interval)
        }
        //working with numbers
         this.interval=setInterval(()=>{
            if( +this.state.second === 59){
                this.setState({minute: (+this.state.minute+1).toString().padStart(2,0), second: 0})
            }
            else if(+this.state.minute ===59){
                this.setState({hour:( +this.state.hour +1).toString().padStart(2,0), minute:0})
            }  else {
                this.setState({second:( +this.state.second +1).toString().padStart(2,0)})
            }
       
         }, 200)
    }
    pauseHandler = () => {
        clearInterval(this.interval)
    }
    resetHandler=() => {
       clearInterval(this.interval)
       this.setState({hour: '00', minute: '00', second:'00'})
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