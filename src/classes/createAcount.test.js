import React from 'react';
import { shallow } from 'enzyme';
import CreateAcount from './createAcount';
import toJson from 'enzyme-to-json';

it('Landing component should render without crashing', () => {
    shallow(<CreateAcount />);
});

it("createAcount component snapshot with Enzyme", () => {
    const wrapper = shallow(<CreateAcount />);
    expect(toJson(wrapper)).toMatchSnapshot();
});