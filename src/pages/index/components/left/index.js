import React, { Component } from 'react';
import './index.less';
import store from '../../../../data/store';
import { setDataInfo } from '../../../../data/dataInfo'

export default class Left extends Component {

    componentDidMount() {
        // const { dispa}
    }

    render() {
        const { dispatch } = this.props;
        const { dataInfo: { a } = {} } = store.getState();
        // const { dataInfo: { a } = {} } = this.props;

        return (
            <div className="left">
                <button
                    className="left--btn"
                    onClick={() => {
                        dispatch(setDataInfo('SET_DATA_ONE', 22))
                    }}
                >{a}</button>
                <h1>left</h1>
            </div>
        )
    }
}
