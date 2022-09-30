import { useRecoilValue } from "recoil";

import { usersState } from "../../store/usersAtom";
import { UserItem, Users } from "../../types";
import UserCard from "./userCard";

const UserCards = () => {
  const users = useRecoilValue<Users>(usersState);

  return (
    <ul>
      {users?.data?.map((user: UserItem) => (
        <UserCard key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserCards;
