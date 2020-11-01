import React, {Component} from "react";
import axios from "axios";

import Menu from '../components/menu.component';

class Register extends Component {
    state = {
        classHide: "show",
        classShow: 'hide',
        fields: {
            action: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state.fields;
        console.log(data);
        axios.post('register.php', data).then(
            res => {
                this.setState({
                    classHide: "hide",
                    classShow: 'show'
                })
            }
        ).catch(
            err => {
                console.log(err)
            }
        );
    }

    async componentDidMount() {
        if (typeof(this.props.match) != "undefined") {
            const { Id } = this.props.match.params;
            const config = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
            await axios.get('user.php?Id='+ Id, config).then(
                res => {
                    this.setState({
                        fields: {
                            action: 'edit',
                            Id: Id,
                            firstName: res.data.user.firstName,
                            lastName: res.data.user.lastName,
                            email: res.data.user.email,
                        },
                        TextButton: "Actualizar usuario",
                        Confirm: "El id " + Id + " fue actualizado exitosamente!"
                    })
                }
            ).catch(
                err => {
                    console.log(err)
                }
            );
        } else {
            this.setState({
                fields: {
                    action: 'add'
                },
                TextButton: "Registrar usuario",
                Confirm: "Registro exitoso!"
            })
        }
    }

    handleChange(field, e) {
        const { fields } = this.state;
        const { value } = e.target;
        fields[field] = value;
        this.setState({ fields }, () => field);
  }

    render() {
        const {fields}=this.state;
        return(
            <div className="container-fluid">
            <div className="row">
                <Menu />
                <div className="menu-right menu-panel col-9">
                    <form onSubmit={this.handleSubmit} className={this.state.classHide}>
                        <h3>Sign up</h3>

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" onChange={this.handleChange.bind(this, 'firstName')} value={fields.firstName  || ''} />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" onChange={this.handleChange.bind(this, 'lastName')} value={fields.lastName  || ''} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} value={fields.email  || ''} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={this.handleChange.bind(this, 'confirmPassword')} />
                        </div>
                        
                        <button className="btn btn-primary btn-block">{this.state.TextButton}</button>
                    </form>
                    <div className={this.state.classShow}>
                        <div className="alert alert-success" role="alert">
                            {this.state.Confirm}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Register;