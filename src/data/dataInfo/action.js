// export const SET_DATA_IN = 'SET_DATA_IN';
// export const SET_DATA_SUCCESS = 'SET_DATA_SUCCESS';
// export const SET_DATA_FAIL = 'SET_DATA_FAIL';


export const SET_DATA_ONE = 'SET_DATA_ONE';
export const SET_DATA_TWO = 'SET_DATA_TWO';

export function setDataInfo(type, num) {

    return {
        // types: [SET_DATA_IN, SET_DATA_SUCCESS, SET_DATA_FAIL],
        // url: '/cgi-bin/dolphin_act/ilivelove/rank/getList',
        // type: 'get',
        // isFormData: true,

        type: type,
        data: {
            num
        }
    }
}