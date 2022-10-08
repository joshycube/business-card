import React from "react";

import { UserItem } from "../../types";
import UserCardForm from "../userCardForm";
import { useUsersMutations } from "../../store";
import UserCards from "../userCards";

const UsersComponent = () => {
  const { getUserById, updateUser, createUser } = useUsersMutations();

  const [userToEdit, setUserToEdit] = React.useState<UserItem>();

  const editUserHandler = (id: string) => {
    const user = getUserById(id);
    setUserToEdit(user);
  };

  const onSubmitCreateHandler = (data: any) => {
    createUser(data);
  };

  const onSubmitUpdateHandler = (data: any) => {
    if (userToEdit && userToEdit.id) {
      updateUser(userToEdit.id, data);
    }
    setUserToEdit(undefined);
  };

  return (
    <>
      <UserCardForm onSubmitHandler={onSubmitCreateHandler} />
      {userToEdit && (
        <UserCardForm
          onSubmitHandler={onSubmitUpdateHandler}
          editFormUserData={userToEdit}
        />
      )}
      <UserCards editUserHandler={editUserHandler} />
    </>
  );
};

export default UsersComponent;
