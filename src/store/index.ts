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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        ...users.data.map((user: UserItem) => {
          if (user.id === formData.id) {
            return {
              id: formData.id,
              ...formData,
            };
          }
          return user;
        }),
      ],
    });
    alert("Successful update!");
  };

  const getUser = async (id: string) => {
    try {
      const userDetails = await getOneUserQuery(id);
      setUser(userDetails.data);
    } catch (error) {
      console.log(error);
      alert("User can not be found!");
    }
  };

  const getUserById = (id: string) => {
    const [user] = users.data.filter((user: UserItem) => user.id === id);
    return user;
  };

  const createUser = async (formData: UserItem) => {
    const newUser = await addUserQuery(formData);
    setUsers({
      ...users,
      data: [{ ...formData, id: newUser.id }, ...users.data],
    });
    alert(`Successful creation: ID: ${newUser.id} When: ${newUser.createdAt}`);
  };

  const deleteUser = async (id: string) => {
    await deleteUserQuery(id);
    const newUsers = users.data.filter((user: UserItem) => user.id !== id);
    setUsers({
      ...users,
      data: [...newUsers],
    });
    alert("Successful deletion!");
  };

  return {
    deleteUser,
    getUsersWithQuery,
    updateUser,
    createUser,
    getUser,
    getUserById,
  };
}
