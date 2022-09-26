import React from "react";
import { useRecoilCallback } from "recoil";

import { usersState } from "../../store/usersAtom";
import { usersLimiter } from "../../store/usersSelector";

const UserPager = () => {
  const [text, setText] = React.useState("per_page=12");

  const limitUsers = useRecoilCallback(
    ({ set }) =>
      async (text: string) => {
        const limited = usersLimiter(text);
        set(usersState, limited);
      },
    [text]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pp = "12";

    if (event.target.value && event.target.value !== "") {
      pp = event.target.value;
    }

    setText(`per_page=${pp}`);
    limitUsers(`per_page=${pp}`);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default UserPager;
