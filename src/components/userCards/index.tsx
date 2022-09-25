import { useRecoilValue } from "recoil";

import { usersState } from "../../store/usersAtom";
import { UserItem } from "../../types";
import UserCard from "./userCard";

const UserCards = () => {
  const users = useRecoilValue<UserItem[]>(usersState("per_page=12"));

  return (
    <ul>
      {users.map((user: UserItem) => (
        <UserCard key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserCards;
