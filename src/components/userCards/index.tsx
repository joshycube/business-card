import React from "react";
import { useRecoilValue } from "recoil";

import { useUsersMutations, usersState, userState } from "../../store";
import { UserItem, Users } from "../../types";
import UserCard from "./userCard";
import UserDetails from "../userDetails";

const UserCards = () => {
  const users = useRecoilValue<Users>(usersState);
  const user = useRecoilValue<UserItem>(userState);
  const { deleteUser, getUser } = useUsersMutations();

  return (
    <>
      {user?.id !== "" ? (
        <div>
          <UserDetails deleteUser={deleteUser} userDetails={user} />
        </div>
      ) : null}
      <ul>
        {users?.data?.map((user: UserItem) => (
          <UserCard
            getUser={getUser}
            deleteUser={deleteUser}
            key={user.id}
            {...user}
          />
        ))}
      </ul>
    </>
  );
};

export default UserCards;
