import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  const app = shallow(<App />);
  const link = app.find('a');
  expect(link.text()).toEqual('Learn React');
  expect(link.prop('href')).toEqual('https://reactjs.org');
});
