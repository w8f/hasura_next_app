import type { NextPage } from 'next';
import { Content } from '../../ui/Content';
import { TodoId } from './TodoId';

export const TodoIdPage: NextPage = () => {
  return (
    <>
      <Content>
        <TodoId />
      </Content>
    </>
  );
};
