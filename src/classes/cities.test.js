import React from 'react';
import { shallow } from 'enzyme';
import Cities from './cities';
import toJson from 'enzyme-to-json';

it('Landing component should render without crashing', () => {
    shallow(<Cities />);
});

it("cities component snapshot with Enzyme", () => {
    const wrapper = shallow(<Cities />);
    expect(toJson(wrapper)).toMatchSnapshot();
});