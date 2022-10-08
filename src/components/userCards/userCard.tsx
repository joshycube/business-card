import { UserItem } from "../../types";

interface Props extends UserItem {
  deleteUser: (id: string) => void;
  getUser: (id: string) => void;
  editUser: (id: string) => void;
}

const UserCard = ({
  deleteUser,
  getUser,
  editUser,
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
          <button onClick={() => getUser(id)}>
            {first_name} {last_name}
          </button>
          <button onClick={() => editUser(id)}>Edit</button>
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
