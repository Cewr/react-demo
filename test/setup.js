// 测试初始化文件
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

// 配置enzyme的adapter
configure({ adapter: new Adapter() });

// 模拟浏览器环境
const { JSDOM } = jsdom;

if (typeof document === 'undefined') {
    const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');
    global.window = dom.window;
    global.document = global.window.document;
    global.navigator = global.window.navigator;
}
