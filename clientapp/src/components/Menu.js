import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <ul className="Menu">
                <li>
                    <NavLink exact to="/" activeClassName="MenuItem-Current">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Item/1" activeClassName="MenuItem-Current">Item 1</NavLink>
                </li>
                <li>
                    <NavLink to="/Item/2" activeClassName="MenuItem-Current">Item 2</NavLink>
                </li>
            </ul>
        );
    }
}

export default Menu;