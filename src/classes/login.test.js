import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';
import toJson from 'enzyme-to-json';

it('Landing component should render without crashing', () => {
    shallow(<Login />);
});

it("login component snapshot with Enzyme", () => {
    const wrapper = shallow(<Login />);
    expect(toJson(wrapper)).toMatchSnapshot();
});