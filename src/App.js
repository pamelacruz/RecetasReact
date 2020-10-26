import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Listar from './components/listar.component';
import Register from './components/register.component';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from "axios";

class App extends Component {

    state = {};

    componentDidMount = () => {
        axios.get('user.php').then(
            res => {
                if (res.data.message === 'success') {
                    this.setUser(res.data.user);
                }
            },
            err => {
                console.log(err);
            }
        )
    };

    setUser = user => {
        this.setState({
            user: user
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav user={this.state.user} setUser={this.setUser}/>
                    <Switch>
                        <Route exact path="/" component={ () => <Home user={this.state.user} /> }/>
                        <Route exact path="/login" component={() => <Login setUser={this.setUser} />}/>
                        <Route exact path="/Listar" component={() => <Listar setUser={this.setUser} />}/>
                        <Route exact path="/register" component={() => <Register setUser={this.setUser} />}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
