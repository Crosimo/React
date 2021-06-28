import React, { Component } from 'react'
import Perso from "./composants/Perso"
export default class App extends Component {
    state = {
        perso1 : {
            prenom: "Jean",
            nom: "Deborsu",
            age: 15
        },
        perso2 : {
            prenom: "Kevin",
            nom: "Bakayako",
            age: 28
        },
        perso3: {
            prenom: "Ilias",
            nom: "Cambiasso",
            age: 24
        }
    }
    changer() {
        // eslint-disable-next-line no-lone-blocks
        this.setState(() => {
            return {
                perso1: {
                    prenom: "Vincenze",
                    nom: "Dragoon",
                    age: 27
                }
            }
        })
    }
    render() {
        return (
            <div>
                <Perso status={this.state} clicker={() => this.changer()}></Perso>
            </div>
        )
    }
}


