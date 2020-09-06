import React, {Component} from 'react';

class Home extends Component {
    render() {
        if (this.props.user) {
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <h2>Hi {this.props.user.first_name} {this.props.user.last_name}</h2>
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