import React, { Component } from 'react'
import logo2 from'../img/logo-clean3000-mini.png'


export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-header-logo">
                <img src={logo2} className="App-logo" alt="logo" />
                </div>
                <div className="App-header-title">
                    <h1>Clean 3000</h1>
                </div>
                <div className="App-header-text">
                    <p>Clean 3000 What Else </p>
                </div>
            </header>
        )
    }
}
