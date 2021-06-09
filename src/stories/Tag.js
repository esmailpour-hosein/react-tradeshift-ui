import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tag } from '../components';

const stories = storiesOf('Tag', module);
stories.add('Text only', () => <Tag text="Roll a d20" id="tag1" />);
stories.add('Label-Text', () => (
	<Tag label="AREA OF ORIGIN" text="The Sword Coast" id="tag2" />
));
stories.add('Tag with type', () => (
	<Tag text="ts-danger" type="ts-danger" id="tag3" />
));
stories.add('Tag with ondelete function', () => (
	<Tag label="fruit" text="apple" onDelete={action('onDelete')} id="tag4" />
));
