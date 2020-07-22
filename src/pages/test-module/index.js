import React, { Component } from 'react';
import './index.less';

class HonorHalls extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { finalRankList, showHead } = this.props;

        return (
            <div className="wrap-card-container">
                <img
                    src={require('./assets/images/podium_head.png')}
                    className="matches-head"
                    alt=""
                />
                <div className="honor_border">
                    <div className="honor_halls">
                        {
                            finalRankList.map((item, index) => {
                                const {
                                    data: {
                                        name,
                                        pic
                                    } = {}
                                } = item || {};

                                return (
                                    <div
                                        className={showHead && 'honor_addhead'}
                                        key={index}
                                        style={{
                                            backgroundImage: index < 3 ?
                                                `url(${require('./assets/images/podium_top_' + (index + 1) + '.png')})`
                                                : `url(${require('./assets/images/podium_normal.png')})`
                                        }}
                                    >
                                        {showHead && <img className="honor_head" src={pic} alt="" />}
                                        {index < 3 ?
                                            <img className="honor_rank" src={require(`./assets/images/crown_${index + 1}.png`)} alt="" />
                                            : <span>第 {index + 1} 名</span>}
                                        <p>{name}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const arr = [];
const obj = {
    data: { name: '--' }
};
for (let i = 0; i < 10; i++) {
    arr.push(obj);
}

HonorHalls.defaultProps = {
    finalRankList: arr
};

export default HonorHalls;
