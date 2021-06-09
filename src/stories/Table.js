import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Table } from '../components';

const stories = storiesOf('Table', module);
stories.add('Basic usage', () => {
	const tableConfig = {
		cols: [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }],
		rows: [
			['A', 'D', 'G'],
			['B', 'E', 'H'],
			['C', 'F', 'I'],
		],
	};
	const shouldShow = boolean('shouldShow', false);
	return shouldShow ? (
		<div style={{ height: 200 }}>
			<Table
				id="profile-table"
				cols={tableConfig.cols}
				rows={tableConfig.rows}
			/>
		</div>
	) : null;
});
stories.add('Linkable table element', () => {
	const tableConfig = {
		cols: [{ label: 'name' }, { label: 'gender' }, { label: 'action' }],
		rows: [
			[
				'Tom',
				'Male',
				{
					text: '[sayHello](sayHello)',
					type: 'say-hello',
				},
			],
			[
				'Lucy',
				'Female',
				{
					text: '[sayHello](sayHello)',
					type: 'say-hello',
				},
			],
			[
				'Li Lei',
				'Male',
				{
					text: '[sayHello](sayHello)',
					type: 'say-hello',
				},
			],
		],
	};
	const handleLinkable = (action) => {
		if (action === 'sayHello') {
			window.ts.ui.Notification.info('hello');
		}
	};
	const shouldShow = boolean('shouldShow', false);
	return shouldShow ? (
		<div style={{ height: 200 }}>
			<Table
				id="profile-table"
				cols={tableConfig.cols}
				rows={tableConfig.rows}
				linkable={handleLinkable}
			/>
		</div>
	) : null;
});
