import { UserItem } from "../../types";

const UserCard = ({ first_name, last_name, email, avatar }: UserItem) => {
  return (
    <li>
      <ul>
        <li>
          {first_name} {last_name}
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
