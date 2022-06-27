import { useRouter } from 'next/router';
import { useGetTodosByPkQuery } from '../../../generated/graphql';
export const useTodoId = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useGetTodosByPkQuery({
    variables: {
      id: Number(id) ?? 0,
    },
  });

  const updateItem = {
    title: data?.todos_by_pk?.title ?? '',
    description: data?.todos_by_pk?.description ?? '',
  };

  return {
    loading,
    updateItem,
  };
};
