import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../graphql/queries/users.query";
import { User } from "../types/index";

const UsersPage: NextPage = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>{JSON.stringify(error)}</p>}
      {data && data.users.map(({ id, name }: User) => <p key={id}>{name}</p>)}
    </>
  );
};
export default UsersPage;
