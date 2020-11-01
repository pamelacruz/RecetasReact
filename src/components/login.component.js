import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";


class Login extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('login.php', data, config)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            this.setState({
                loggedIn: true
            })
            this.props.setUser(res.data.user);
        })
        .catch(err => {
            console.log(err)
        })
    };

    render() {

        if (this.state.loggedIn) {
            return <Redirect to={'/'} />;
        }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value } />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value } />
                        </div>

                        <button className="btn btn-primary btn-block">login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;