import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Button from '.';

configure({ adapter: new Adapter() });

describe('Button', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Button>Default button</Button>);

		expect(wrapper).toMatchSnapshot();
	});

	it('should render correctly having className', () => {
		const wrapper = shallow(
			<Button className="ts-primary">Default button</Button>,
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('should set button state to true correctly', () => {
		const button = shallow(<Button busy>busy button</Button>);

		expect(button.prop('data-ts.busy')).toBe(true);
	});
});
