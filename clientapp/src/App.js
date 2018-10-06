import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu.js';
import Home from './pages/Home.js';
import Item from './pages/Item.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App-page">
                    <Menu />
                    <Route exact path="/" component={Home} />
                    <Route path="/Item/:id" component={Item} />
                </div>
            </Router>
        );
    }
}

export default App;
