import type { NextPage } from 'next';
import { Content } from '../../ui/Content';
import { Todo } from './Todo';

export const TodoPage: NextPage = () => {
  return (
    <>
      <Content>
        <Todo />
      </Content>
    </>
  );
};
