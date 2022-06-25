import { FC } from 'react';
import { Todos } from '../../generated/graphql';
import { useTodoCard } from './useTodoCard';

/**
 * Todo Card コンポーネント
 * Todoの詳細を表示する。
 *
 * @param todos
 */
export const TodoCard: FC<Todos> = ({ id, title, description, created_at, updated_at }) => {
  const { onClickDeleteTodo } = useTodoCard();
  return (
    <div key={id} className='m-6 bg-slate-100 border-2 p-2'>
      <button
        className='bg-slate-600 hover:bg-slate-500 text-white p-1 m-1'
        onClick={() => onClickDeleteTodo(id)}
      >
        削除
      </button>
      <button className='bg-slate-600 hover:bg-slate-500 text-white p-1 m-1'>更新</button>
      <p>{title}</p>
      <p>{description}</p>
      <p>{created_at}</p>
      <p>{updated_at}</p>
    </div>
  );
};
