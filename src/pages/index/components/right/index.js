import React, { Component } from 'react'
// import store from '../../../../data/store';
import { setDataInfo } from '../../../../data/dataInfo'

export default class Right extends Component {
    render() {
        const { dispatch } = this.props;
        // const { dataInfo: { a } = {} } = store.getState();
        const { dataInfo: { a } = {} } = this.props;

        return (
            <div>
                <button
                    onClick={() => {
                        dispatch(setDataInfo('SET_DATA_ONE', 33))
                    }}
                >{a}</button>
                <h1>right</h1>
            </div>
        )
    }
}
