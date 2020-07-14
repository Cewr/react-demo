import React, { Component } from 'react';
import { Switch, HashRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'

import Left from './components/left'
import Right from './components/right'

import { connect } from 'react-redux'
import { setDataInfo } from '../../data/dataInfo'


class Index extends Component {
    constructor(props) {
        const Left1 = connect(
            state => state
        )(Left);
        const Right1 = connect(
            state => state
        )(Right);

        super(props, Left1, Right1);

        this.state = {
            Left: Left1,
            Right: Right1
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        const { fetSetDataInfo } = this.props;
        fetSetDataInfo("SET_DATA_ONE", 11);
    }

    render() {
        const { Left, Right } = this.state;
        // const { dataInfo } = this.props;

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
function mapStateToProps(state) {
    const { dataInfo } = state;
    return {
        dataInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetSetDataInfo(type, num) {
            dispatch(setDataInfo(type, num));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
