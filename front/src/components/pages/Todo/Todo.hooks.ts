import { useState, useCallback } from 'react';
import {
  useGetTodosQuery,
  Todos,
  useAddTodosMutation,
  useDeleteTodosByPkMutation,
} from '../../../generated/graphql';

type Input = Pick<Todos, 'title' | 'description'>;

export const useTodos = () => {
  const [formData, setFormData] = useState<Input>({
    title: '',
    description: '',
  });
  const { data, loading, error, refetch } = useGetTodosQuery();

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

  const [deleteTodosByPkMutation] = useDeleteTodosByPkMutation();

  const onClickAddTodos = useCallback(() => {
    addTodosMutation();
  }, [addTodosMutation]);

  const onClickDeleteTodo = useCallback(
    (id: number) => {
      deleteTodosByPkMutation({
        variables: {
          id: id,
        },
        onCompleted: () => {
          refetch();
        },
      });
    },
    [deleteTodosByPkMutation, refetch],
  );

  /** Input要素用 共通関数 */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    data,
    formData,
    loading,
    onClickAddTodos,
    onClickDeleteTodo,
    onInputChange,
  };
};
