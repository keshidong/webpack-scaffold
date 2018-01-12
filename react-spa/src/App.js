import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './routes/index';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map(route => (
                            <Route key={route.path} {...route} />
                        ))
                    }
                </Switch>
            </Router>
        );
    }
}

export default App;
