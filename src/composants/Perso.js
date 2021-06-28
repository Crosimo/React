import React, { Component } from 'react'

export default class Perso extends Component {
    render() {
        let statistique = this.props.status;
        console.log(this.props.clicker)
        return (
            <div>
              <div>{`  ${statistique.perso1.prenom}${statistique.perso1.nom} a ${statistique.perso1.age} ans`}</div>  
              <div> {`  ${statistique.perso2.prenom}${statistique.perso2.nom} a ${statistique.perso2.age} ans`}</div> 
                <div> {`  ${statistique.perso3.prenom}${statistique.perso3.nom} a ${statistique.perso3.age} ans`} </div>
                <button onClick={this.props.clicker}>Donne</button>
                
            </div>
        )
       
    }
   
}
