import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;