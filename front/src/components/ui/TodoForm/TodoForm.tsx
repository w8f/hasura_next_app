import { FC } from 'react';
import { useTodoForm, TodoFormProps } from './TodoForm.hooks';

/**
 * Todo入力コンポーネント
 */
export const TodoForm: FC<TodoFormProps> = ({ mode, updateItem }) => {
  const { formData, onInputChange, onClickAddTodos, onClickUpdateTodos } = useTodoForm({
    mode,
    updateItem,
  });
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
      {mode === 'add' && (
        <button
          className='bg-white hover:bg-slate-50 border-2 rounded-md p-2'
          onClick={onClickAddTodos}
        >
          add Todo!
        </button>
      )}
      {mode === 'update' && (
        <button
          className='bg-white hover:bg-slate-50 border-2 rounded-md p-2'
          onClick={onClickUpdateTodos}
        >
          update Todo!
        </button>
      )}
    </>
  );
};
