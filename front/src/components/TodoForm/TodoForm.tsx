import { FC } from 'react';
import { useTodoForm } from './useTodoForm';

/**
 * Todo入力コンポーネント
 */
export const TodoForm: FC = () => {
  const { formData, onInputChange, onClickAddTodos } = useTodoForm();
  return (
    <>
      <form>
        <div className='flex justify-center m-4'>
          <label className='mr-4' htmlFor='title'>
            Title:
          </label>
          <input
            className='bg-white border border-gray-800'
            type='text'
            name='title'
            value={formData.title}
            onChange={onInputChange}
          ></input>
        </div>
        <div className='flex justify-center m-4'>
          <label className='mr-4' htmlFor='description'>
            Description:
          </label>
          <textarea
            className='bg-white border border-gray-800'
            name='description'
            rows={3}
            cols={30}
            value={formData.description ?? ''}
            onChange={onInputChange}
          ></textarea>
        </div>
      </form>
      <button
        className='bg-white hover:bg-slate-50 border-2 rounded-md p-2'
        onClick={onClickAddTodos}
      >
        add Todo!
      </button>
    </>
  );
};
