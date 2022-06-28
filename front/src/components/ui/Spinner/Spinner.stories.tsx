import { Meta, Story } from '@storybook/react';
import { Spinner } from './index';

export default {
  component: Spinner,
  title: 'Spinner',
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

Default.args = {};
