import React, {Component} from 'react';
import {Link} from "react-router-dom";


class MenuIzq extends Component {
    render() {
        return (
            <div className="menu-left col-3">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/listar'}>Usuarios</Link></li>
                </ul>
            </div>
        );
    }
}

export default MenuIzq;