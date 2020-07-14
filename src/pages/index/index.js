import React, { Component } from 'react';
import { Switch, HashRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'
import Left from './components/left'
import Right from './components/right'

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1>Index</h1>
                <Router>
                    <Switch>

                        <Route exact path='/left' component={Left} />
                        <Route exact path='/right' component={Right} />

                        <Redirect exact from='/' to='/left' />

                        <Route component={() => <div>404</div>} />

                    </Switch>
                </Router>
                <hr />
                <div>
                    <NavLink to="/left">left</NavLink>
                    ---|---
                    <NavLink to="/right">right</NavLink>

                    <hr />
                    <NavLink to="/rule">rule</NavLink>
                </div>
            </div>
        )
    }
}
