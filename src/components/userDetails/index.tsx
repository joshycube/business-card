const UserDetails = ({ userDetails, deleteUser }: any) => {
  return (
    <div style={{ border: "1px solid", padding: "5px", margin: 10 }}>
      <div>{userDetails?.first_name}</div>
      <div>{userDetails?.last_name}</div>
      <div>{userDetails?.email}</div>
      <button onClick={() => deleteUser(userDetails.id)}>Delete</button>
    </div>
  );
};

export default UserDetails;
