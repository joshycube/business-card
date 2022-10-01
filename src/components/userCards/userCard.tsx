import { UserItem } from "../../types";

interface Props extends UserItem {
  deleteUser: (id: string) => void;
}

const UserCard = ({
  deleteUser,
  id,
  first_name,
  last_name,
  email,
  avatar,
}: Props) => {
  return (
    <li>
      <ul>
        <li>
          {first_name} {last_name}{" "}
          <button onClick={() => deleteUser(id)}>Delete</button>
        </li>
        <li>
          <img width="50" alt="userImage" src={avatar} />
        </li>
        <li>{email}</li>
        <li>
          <hr />
        </li>
      </ul>
    </li>
  );
};

export default UserCard;
