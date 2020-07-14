// import { SET_DATA_IN, SET_DATA_SUCCESS, SET_DATA_FAIL } from './action';
import { SET_DATA_ONE, SET_DATA_TWO } from './action'

export default function dataInfo(state = {}, action) {

    // console.log('state>>', state, 'action>>', action);

    // const { types } = action;
    // switch (types) {
    //     case SET_DATA_IN:
    //         console.log(111);
    //         break;

    //     case SET_DATA_SUCCESS:
    //         console.log(111);
    //         break;

    //     case SET_DATA_FAIL:
    //         console.log(111);
    //         break;

    //     default:
    //         break;
    // }
    let data = {};

    const { type, data: { num } = {} } = action;
    switch (type) {
        case SET_DATA_ONE:
            data = { a: '10' + num }
            break;

        case SET_DATA_TWO:
            data = { a: '10' + num }
            break;

        default:
            break;

    }
    return Object.assign({}, state, data)
}