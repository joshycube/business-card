import { atom, selector, useRecoilState } from "recoil";

import { getUsersQuery, deleteUserQuery } from "./api";
import { UserItem } from "../types";

export const usersState = atom({
  key: "UsersState",
  default: selector({
    key: "UsersState/Default",
    get: async () => {
      return await getUsersQuery("page=1&per_page=12");
    },
  }),
});

export function useUsersMutations() {
  const [users, setUsers] = useRecoilState(usersState);

  const getUsersWithQuery = async (queryParam: string) => {
    const queriedUsers = await getUsersQuery(queryParam);
    setUsers(queriedUsers);
  };

  const deleteUser = async (id: string) => {
    await deleteUserQuery(id);
    const newUsers = users.data.filter((user: UserItem) => user.id !== id);
    setUsers({
      ...users,
      data: [...newUsers],
    });
  };

  return { deleteUser, getUsersWithQuery };
}
