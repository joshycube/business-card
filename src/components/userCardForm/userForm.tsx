import { ACTIONS, UserFormDataActionType, UserFormDataAction } from "./index";

export interface UserFormProps {
  userState: {
    first_name: string;
    last_name: string;
    email: string;
  };
  setUserState: (obj: UserFormDataAction) => void;
  onSubmit: () => void;
}

const UserForm = ({ userState, setUserState, onSubmit }: UserFormProps) => {
  return (
    <div>
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserState({
            type: ACTIONS.firstNameChange as UserFormDataActionType,
            payload: e.target.value as string,
          })
        }
        type="text"
        placeholder="Firstname"
        value={userState.first_name}
      />
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserState({
            type: ACTIONS.lastNameChange as UserFormDataActionType,
            payload: e.target.value as string,
          })
        }
        type="text"
        value={userState.last_name}
        placeholder="Lastname"
      />
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserState({
            type: ACTIONS.emailChange as UserFormDataActionType,
            payload: e.target.value as string,
          })
        }
        value={userState.email}
        type="email"
        placeholder="Email"
      />
      <button onClick={onSubmit}>Save</button>
    </div>
  );
};

export default UserForm;
