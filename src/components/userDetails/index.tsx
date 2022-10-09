import { UserItem } from "../../types";
interface Props {
  userDetails: UserItem;
  deleteUser: (id: string) => void;
  editUser: (id: string) => void;
}

const UserDetails = ({ userDetails, deleteUser, editUser }: Props) => {
  return (
    <div style={{ border: "1px solid", padding: "5px", margin: 10 }}>
      <div>{userDetails?.first_name}</div>
      <div>{userDetails?.last_name}</div>
      <div>{userDetails?.email}</div>
      <button onClick={() => editUser(userDetails.id)}>Edit</button>
      <button onClick={() => deleteUser(userDetails.id)}>Delete</button>
    </div>
  );
};

export default UserDetails;
