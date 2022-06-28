import { Meta, Story } from '@storybook/react';
import {
  Todos,
  GetTodosDocument,
  AddTodosDocument,
  UpdateTodosByPkDocument,
} from '../../../generated/graphql';
import { TodoFormProps } from './TodoForm.hooks';
import { TodoForm } from './index';

export default {
  component: TodoForm,
  title: 'TodoForm',
} as Meta;

const Template: Story<TodoFormProps> = (args) => <TodoForm {...args} />;

export const Add = Template.bind({});

export const Update = Template.bind({});

Add.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GetTodosDocument,
        },
        result: {
          data: {
            id: 1,
            title: 'sample todo title',
            description: 'sample todo description',
            created_at: '2022-06-22',
            updated_at: '2022-06-22',
          },
        },
      },
      {
        request: {
          query: AddTodosDocument,
        },
        result: {
          data: {
            id: 1,
            title: 'sample todo title',
            description: 'sample todo description',
            created_at: '2022-06-22',
            updated_at: '2022-06-22',
          },
        },
      },
    ],
  },
  nextRouter: {
    path: '/todo/[id]',
    asPath: '/todo/1',
    query: {
      id: '1',
    },
  },
};

Add.args = {
  mode: 'add',
};

Update.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GetTodosDocument,
        },
        result: {
          data: {
            id: 1,
            title: 'sample todo title',
            description: 'sample todo description',
            created_at: '2022-06-22',
            updated_at: '2022-06-22',
          },
        },
      },
      {
        request: {
          query: UpdateTodosByPkDocument,
        },
        result: {
          data: {
            id: 1,
            title: 'sample todo title',
            description: 'sample todo description',
            created_at: '2022-06-22',
            updated_at: '2022-06-22',
          },
        },
      },
    ],
  },
  nextRouter: {
    path: '/todo/[id]',
    asPath: '/todo/1',
    query: {
      id: '1',
    },
  },
};

Update.args = {
  mode: 'update',
};
