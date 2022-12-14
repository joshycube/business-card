import React from "react";
import { useRecoilValue } from "recoil";

import { Users } from "../../types";
import { usersState, useUsersMutations } from "../../store";

const UserPager = () => {
  const [limit, setLimit] = React.useState("per_page=12");

  const users = useRecoilValue<Users>(usersState);
  const { getUsersWithQuery } = useUsersMutations();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pp = "12";

    if (event.target.value && event.target.value !== "") {
      pp = event.target.value;
    }

    setLimit(pp);
    getUsersWithQuery(`per_page=${pp}`);
  };

  const stepPrev = () => {
    let prevPage = 1;

    if (users.total_pages === 1) {
      prevPage = 1;
    } else if (users.page === 1) {
      prevPage = users.page - 1;
    } else {
      prevPage = users.page - 1;
    }

    getUsersWithQuery(`per_page=${limit}&page=${prevPage}`);
  };

  const stepNext = () => {
    let nextPage = 1;

    if (users.total_pages === 1) {
      nextPage = 1;
    } else if (users.page === users.total_pages) {
      nextPage = 1;
    } else {
      nextPage = users.page + 1;
    }

    getUsersWithQuery(`per_page=${limit}&page=${nextPage}`);
  };

  return (
    <div>
      <label>Items per page</label>
      <input type="text" onChange={onChange} />
      <button
        onClick={stepPrev}
        id="prevPageBtn"
        disabled={users.page - 1 === 0}
      >
        &laquo;
      </button>
      <button
        onClick={stepNext}
        id="nextPageBtn"
        disabled={users.page === users.total_pages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default UserPager;
