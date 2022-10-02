import { atom, selector, useRecoilState } from "recoil";

import {
  getUsersQuery,
  deleteUserQuery,
  updateUserQuery,
  addUserQuery,
  getOneUserQuery,
} from "./api";
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

export const userState = atom({
  key: "UserState/Default",
  default: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  },
});

export function useUsersMutations() {
  const [users, setUsers] = useRecoilState(usersState);
  const [user, setUser] = useRecoilState(userState);

  const getUsersWithQuery = async (queryParam: string) => {
    const queriedUsers = await getUsersQuery(queryParam);
    setUsers(queriedUsers);
  };

  const updateUser = async (id: string, formData: any) => {
    await updateUserQuery(id, formData);
    setUsers({
      ...users,
      data: [
        ...users.data,
        {
          id,
          ...formData,
        },
      ],
    });
  };

  const getUser = async (id: string) => {
    const userDetails = await getOneUserQuery(id);

    setUser(userDetails.data);
  };

  const createUser = async (formData: any) => {
    const newUser = await addUserQuery(formData);
    setUsers({
      ...users,
      data: [
        ...users.data,
        {
          id: newUser.id,
          ...formData,
        },
      ],
    });
  };

  const deleteUser = async (id: string) => {
    await deleteUserQuery(id);
    const newUsers = users.data.filter((user: UserItem) => user.id !== id);
    setUsers({
      ...users,
      data: [...newUsers],
    });
  };

  return { deleteUser, getUsersWithQuery, updateUser, createUser, getUser };
}
