import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.jsx';

describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });

    it('should have a button with text of Hello', () => {
      const wrapper = shallow(<App />)
      const button = wrapper.find('button')
      expect(button.length).toBe(0)
    })
});


