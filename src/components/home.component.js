import React, {Component} from 'react';
import Menu from '../components/menu.component';

class Home extends Component {
    render() {
        if (this.props.user) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <div className="col-9 menu-right menu-panel auth-wrapper">
                            <h2>Hi {this.props.user.firstName} {this.props.user.lastName}</h2>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <img src="./fondo.jpg" alt="No login admin"/>
                </div>
            </div>
        )
    }
}

export default Home;