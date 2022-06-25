import { useState, useCallback } from 'react';
import { Todos, useAddTodosMutation, useGetTodosQuery } from '../../generated/graphql';

type Input = Pick<Todos, 'title' | 'description'>;

export const useTodoForm = () => {
  const [formData, setFormData] = useState<Input>({
    title: '',
    description: '',
  });

  /** Input要素用 共通関数 */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { refetch } = useGetTodosQuery();
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

  const onClickAddTodos = useCallback(() => {
    addTodosMutation();
  }, [addTodosMutation]);

  return { formData, onInputChange, onClickAddTodos };
};
