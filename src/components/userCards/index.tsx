import { useRecoilValue } from "recoil";

import { useUsersMutations } from "../../store";
import { usersState } from "../../store/index";
import { UserItem, Users } from "../../types";
import UserCard from "./userCard";

const UserCards = () => {
  const users = useRecoilValue<Users>(usersState);
  const { deleteUser } = useUsersMutations();

  return (
    <ul>
      {users?.data?.map((user: UserItem) => (
        <UserCard deleteUser={deleteUser} key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserCards;
