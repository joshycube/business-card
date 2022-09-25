import { atomFamily, selectorFamily } from "recoil";

const API_URL = `https://reqres.in/api/users`;

export const usersState = atomFamily({
  key: "UsersState",
  default: selectorFamily({
    key: "UsersState/Default",
    get:
      (queryParams: string = "") =>
      async () => {
        const response = await fetch(`${API_URL}?${queryParams}`, {
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
