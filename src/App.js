import React, { Component } from 'react'
import DisplayTime from './composants/DisplayTime'
export default class App extends Component {
  
    state = { tableau: ["ayay", "oyoy", "ayayez", "agraaa", "agroouax"] }
    removeEl() {
   
        this.state.tableau.splice(0, 1)
        this.setState((state) => {
           
            console.log(state.tableau)
            return { tableau:  state.tableau }
            
        })
    }
    render() {
        return (
            <React.Fragment>
            <DisplayTime format = "jsTime"></DisplayTime>
            <div>{this.state.tableau.length}</div>
            <button onClick = {() => this.removeEl()}> Grara </button>
            </React.Fragment>
        )
            
        
    }
}


