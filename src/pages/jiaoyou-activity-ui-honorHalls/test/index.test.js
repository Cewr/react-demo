import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import React from 'react';

import Honor from '../index';

// enzyme:
describe('Index组件测试用例', function () {

        it('基础组件有4个img', function(){
            const wrapper = mount(<Honor/>);
            expect(wrapper.find('img')).to.have.length(4);
        })

        it('选择展示头像之后有14个img', function(){
            const wrapper = mount(
                <Honor
                    showHead={true}
                />
            );
            expect(wrapper.find('img')).to.have.length(14);
        })
});

