import React, {Component} from "react";
import axios from "axios";

import Menu from '../components/menu.component';

class Register extends Component {

    state = {
        classHide: "show",
        classShow: 'hide'
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        }

        axios.post('register.php', data).then(
            res => {
                this.setState({
                    classHide: "hide",
                    classShow: 'show'
                })
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        );
    }

    render() {
        return(
            <div className="container-fluid">
            <div className="row">
                <Menu />
                <div className="menu-right menu-panel col-9">
                    <form onSubmit={this.handleSubmit} className={this.state.classHide}>
                        <h3>Sign up</h3>

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" onChange={e => this.firstName = e.target.value } />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" onChange={e => this.lastName = e.target.value }  />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value } />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value } />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirmPassword = e.target.value } />
                        </div>

                        <button className="btn btn-primary btn-block">Registrar usuario</button>
                    </form>
                    <div className={this.state.classShow}>
                        <div className="alert alert-success" role="alert">
                            Registro exitoso!
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Register;