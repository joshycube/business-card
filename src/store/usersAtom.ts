import { atom, selector } from "recoil";

import { UserItem } from "../types";

const API_URL = `https://reqres.in/api/users?per_page=12`;

export const usersState = atom<UserItem[]>({
  key: "UsersState",
  default: selector({
    key: "UsersState/Default",
    get: async () => {
      const response = await fetch(API_URL, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      const userObject = await response.json();
      return userObject.data;
    },
  }),
});
