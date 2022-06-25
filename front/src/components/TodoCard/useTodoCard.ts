import { useCallback } from 'react';
import { useGetTodosQuery, useDeleteTodosByPkMutation } from '../../generated/graphql';

export const useTodoCard = () => {
  const [deleteTodosByPkMutation] = useDeleteTodosByPkMutation();
  const { refetch } = useGetTodosQuery();

  /** 削除ボタン押下時アクション */
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

  return {
    onClickDeleteTodo,
  };
};
