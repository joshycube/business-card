import { atom, selector } from "recoil";

const API_URL = `https://reqres.in/api/users`;

export const usersState = atom({
  key: "UsersState",
  default: selector({
    key: "UsersState/Default",
    get: async () => {
      const response = await fetch(`${API_URL}?per_page=12`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      const userObject = await response.json();
      return userObject;
    },
  }),
});
