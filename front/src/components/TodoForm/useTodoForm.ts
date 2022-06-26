import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import {
  Todos,
  useAddTodosMutation,
  useGetTodosQuery,
  useUpdateTodosByPkMutation,
} from '../../generated/graphql';

type Input = Pick<Todos, 'title' | 'description'>;

export type TodoFormProps = {
  mode: 'add' | 'update';
  updateItem?: Input;
};

export const useTodoForm = ({ updateItem }: TodoFormProps) => {
  const router = useRouter();
  const { id } = router.query;

  /** 入力値state */
  const [formData, setFormData] = useState<Input>(
    updateItem ?? {
      title: '',
      description: '',
    },
  );

  /** Input要素用 共通関数 */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { refetch } = useGetTodosQuery();

  /** Todo 登録 mutation */
  const [addTodosMutation] = useAddTodosMutation({
    variables: {
      title: formData.title,
      description: formData.description,
    },
    onCompleted: () => {
      refetch();
      setFormData({
        title: '',
        description: '',
      });
    },
  });

  /** Todo 更新 mutation */
  const [updateTodosByPkMutation, { error }] = useUpdateTodosByPkMutation({
    variables: {
      id: Number(id) ?? 0,
      title: formData.title,
      description: formData.description,
    },
  });

  /** add Todo!ボタン押下時 */
  const onClickAddTodos = useCallback(() => {
    addTodosMutation();
  }, [addTodosMutation]);

  /** Update Todo!ボタン押下時 */
  const onClickUpdateTodos = useCallback(() => {
    updateTodosByPkMutation();
    if (error) {
      console.log(error);
      return;
    }
    router.push('/todo');
  }, [updateTodosByPkMutation, router, error]);

  return { formData, onInputChange, onClickAddTodos, onClickUpdateTodos };
};
