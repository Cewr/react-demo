
# HonorHalls 荣誉殿堂


## 示范图

## 功能介绍
荣誉殿堂排名展示组件，根据头像是否需要 作不同展示效果

## 入参描述
| 属性 | 说明 | 类型 | 默认值 | 是否必传 |
| :--: | :--: | :--: | :----: | :------: |
|  finalRankList   |  榜单列表    |   Array   |   --    |    是    |
|  showHead   |  是否展示主播头像    |   Boolean   |   --    |    否    |

## 对外接口
无

## 示例
```js
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
        }
        for (let i = 0; i < 10; i++) {
            finalRankList.push(obj)
        }

        return (
            <div>
                <Honor finalRankList={finalRankList} />
                <Honor finalRankList={finalRankList} showHead />
            </div>
        );
    }
}


```