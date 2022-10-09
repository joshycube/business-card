import React from "react";
import { useRecoilValue } from "recoil";

import { useUsersMutations, usersState, userState } from "../../store";
import { UserItem, Users } from "../../types";
import UserCard from "./userCard";
import UserDetails from "../userDetails";

interface Props {
  editUserHandler: (id: string) => void;
}

const UserCards = ({ editUserHandler }: Props) => {
  const users = useRecoilValue<Users>(usersState);
  const user = useRecoilValue<UserItem>(userState);

  const { deleteUser, getUser } = useUsersMutations();
  const [showUserDetails, toggleShowUserDetails] =
    React.useState<boolean>(false);

  const getUserHandler = (id: string) => {
    toggleShowUserDetails(true);
    getUser(id);
  };

  const deleteUserHandler = (id: string) => {
    toggleShowUserDetails(false);
    deleteUser(id);
  };

  return (
    <>
      {user?.id !== "" && showUserDetails ? (
        <div>
          <UserDetails
            editUser={editUserHandler}
            deleteUser={deleteUserHandler}
            userDetails={user}
          />
        </div>
      ) : null}
      <ul>
        {users?.data?.map((user: UserItem) => (
          <UserCard
            getUser={getUserHandler}
            deleteUser={deleteUserHandler}
            key={user.id}
            {...user}
          />
        ))}
      </ul>
    </>
  );
};

export default UserCards;
