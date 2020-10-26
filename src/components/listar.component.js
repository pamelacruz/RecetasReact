import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import Menu from './menu.component';

class Listar extends Component {

    constructor(props) {
        super(props);
        this.state = {usuarios: []};
        this.loadList();
      }

    loadList = () => {
        console.log("entra");
        axios.post('listado.php').then(
            res => {
                if (res.data.message === 'success') {
                    this.setState({
                        usuarios: res.data.user
                    })
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    } 

    render() {
        return(
            <div className="container-fluid">
            <div className="row">
                <Menu loadList={this.loadList}/>
                <div className="menu-right menu-panel col-9">
                    <div className="text-right">
                        <Link to={'/register'} type="button" className="btn btn-primary">Nuevo usuario</Link>
                    </div>                    
                    <h3>Usuarios</h3>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Correo</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map( usuario => (
                                    <tr key={usuario.id}>
                                        <th scope="row">{usuario.id}</th>
                                        <td>{usuario.first_name}</td>
                                        <td>{usuario.last_name}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <Link to={'/register'} type="button" className="btn btn-light">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                                </svg>
                                            </Link>
                                        </td>
                                        <td><Link to={'/register'} type="button" className="btn btn-light">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                </div>
            </div>
            </div>
        );
    }
}

export default Listar;