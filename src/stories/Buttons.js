import { storiesOf } from '@storybook/react';
import React from 'react';
import { Buttons } from '../components';

const stories = storiesOf('Buttons', module);

stories.add(
	'Basic structure',
	() => (
		<Buttons>
			<li>
				<button type="button">
					<span>Button One</span>
				</button>
			</li>
			<li>
				<button type="button">
					<span>Button Two</span>
				</button>
			</li>
		</Buttons>
	),
	{
		info: 'The basic structure',
	},
);

stories.add(
	'Joined buttons',
	() => (
		<Buttons className="ts-t-t ts-join">
			<li>
				<button type="button">
					<span>Button One</span>
				</button>
			</li>
			<li>
				<button type="button">
					<span>Button Two</span>
				</button>
			</li>
		</Buttons>
	),
	{
		info: 'Buttons component accepts attributes describes in `tradeshift-ui buttons` documentation page',
	},
);
