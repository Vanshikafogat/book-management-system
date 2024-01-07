import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
const history = createHistory();

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <Router history={history}>
                <div className='app'>
                    Hello World
                    {/* {this.state.showAlert && <Notification type={this.state.type} message={this.state.message} showNotification={this.state.showAlert} />} */}
                    {/* <Route path='/' exact component = {Login} />
                    <Route exact path='/register' render = { (props) => <Register {...props} handleNotification={this.handleNotification} />} /> */}
                </div>
            </Router>
        );
    }
};

export default App;