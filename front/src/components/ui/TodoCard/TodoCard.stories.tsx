import { Meta, Story } from '@storybook/react';
import { Todos, DeleteTodosByPkDocument } from '../../../generated/graphql';
import { TodoCard } from './index';

export default {
  component: TodoCard,
  title: 'TodoCard',
} as Meta;

const Template: Story<Todos> = (args) => <TodoCard {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: DeleteTodosByPkDocument,
        },
        result: {
          data: {
            title: 'delete title',
          },
        },
      },
    ],
  },
};

Default.args = {
  id: 1,
  title: 'sample todo title',
  description: 'sample todo description',
  created_at: '2022-06-22',
  updated_at: '2022-06-22',
};
