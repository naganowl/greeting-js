import React from 'react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import 'jest-enzyme';

let wrapper, render = null;

beforeEach(function() {
  render = () => shallow(<App />);
  wrapper = render();
});

afterEach(function() {
  wrapper.unmount();
});

it('says "Hello, my friend." when no name is provided', function () {
  expect(wrapper.find('#output')).toHaveText('Hello, my friend.');
});

// it('displays the name when the submit button is clicked', () => {
//   wrapper.find('input').simulate('change', {target: {value: 'Jane'}});
//   wrapper.find('button').simulate('click');
//   expect(wrapper.find('#output')).toHaveText('Hello, Jane.');
// });
