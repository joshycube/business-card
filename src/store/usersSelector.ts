import { selectorFamily } from "recoil";

const API_URL = `https://reqres.in/api/users`;

export const usersLimiter = selectorFamily({
  key: "UsersLimiter",
  get: (queryParam: string) => async () => {
    const response = await fetch(`${API_URL}?${queryParam}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    const userObject = await response.json();
    return userObject.data;
  },
});
