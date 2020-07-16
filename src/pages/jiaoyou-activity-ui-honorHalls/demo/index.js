import React, { Component } from 'react';
import Honor from '../index';

export default class extends Component {

    render() {
        const finalRankList = [];
        const obj = {
            data: {
                name: '--',
                pic: 'https://pic.url.cn/hy_personal_room/0/now_acticity1569409462569.png/0'
            }
        };
        for (let i = 0; i < 10; i++) {
            finalRankList.push(obj);
        }

        return (
            <div>
                <Honor finalRankList={finalRankList} />
                <Honor finalRankList={finalRankList} showHead />
            </div>
        );
    }
}
