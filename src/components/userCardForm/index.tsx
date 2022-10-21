import React from "react";

import UserForm from "./userForm";

//test

export interface UserFormData {
  first_name: string;
  last_name: string;
  email: string;
}

export interface Error {
  [k: string]: string;
}

export type UserFormDataActionType =
  | "FIRST_NAME_CHANGE"
  | "LAST_NAME_CHANGE"
  | "EMAIL_CHANGE"
  | "POPULATE_FORM";

export interface UserFormDataAction {
  type: UserFormDataActionType;
  payload: any;
}

export const ACTIONS = {
  firstNameChange: "FIRST_NAME_CHANGE",
  lastNameChange: "LAST_NAME_CHANGE",
  emailChange: "EMAIL_CHANGE",
  clearForm: "CLEAR_FORM",
  populateForm: "POPULATE_FORM",
};

const defaultState = {
  first_name: "",
  last_name: "",
  email: "",
  errors: [],
};

const clearError = (
  state: UserFormData & { errors?: Error[] },
  fieldName: string
) =>
  (state.errors &&
    state.errors.filter((error: Error) => error.field !== fieldName, [])) ||
  [];

const isErrorSet = (
  UserFormDataState: UserFormData & { errors?: Error[] },
  fieldName: string
): boolean =>
  (UserFormDataState.errors &&
    UserFormDataState.errors.some(
      (error: Error) => error.field === fieldName
    )) ||
  false;

const findErrorMsg = (
  UserFormDataState: UserFormData & { errors?: Error[] },
  fieldName: string
): string => {
  const errorObj =
    UserFormDataState.errors &&
    UserFormDataState.errors.filter(
      (error: Error) => error.field === fieldName
    );
  return (errorObj && errorObj[0].msg) || "";
};

function formReducer(
  state: UserFormData & { errors?: Error[] },
  action: UserFormDataAction
): UserFormData & { errors?: Error[] } {
  let errors: Error[] = state.errors || [];
  switch (action.type) {
    case ACTIONS.firstNameChange:
      const fname = action.payload.replace(/^\s+|\s+$/gm, "");
      if (fname.length < 2 || fname.length > 64) {
        errors = [
          ...errors,
          {
            field: "first_name",
            msg: "firstNameError",
          },
        ];
      } else {
        errors = clearError(state, "first_name");
      }
      return { ...state, first_name: action.payload, errors };
    case ACTIONS.lastNameChange:
      const lname = action.payload.replace(/^\s+|\s+$/gm, "");
      if (lname.length < 2 || lname.length > 64) {
        errors = [
          ...errors,
          {
            field: "first_name",
            msg: "lastNameError",
          },
        ];
      } else {
        errors = clearError(state, "first_name");
      }
      return { ...state, last_name: action.payload, errors };
    case ACTIONS.emailChange:
      const email = action.payload;
      if (email.length < 6 || email.length > 64) {
        errors = [
          ...errors,
          {
            field: "email",
            msg: "emailError",
          },
        ];
      } else {
        errors = clearError(state, "email");
      }
      return { ...state, email: action.payload, errors };
    case ACTIONS.populateForm:
      return { ...state, ...action.payload };
    case ACTIONS.clearForm:
      return defaultState;
    default:
      return state;
  }
}

export interface Props {
  editFormUserData?: UserFormData;
  onSubmitHandler: (data: UserFormData) => void;
}

const UserCardForm = ({ editFormUserData, onSubmitHandler }: Props) => {
  const initialState: UserFormData & { errors?: Error[] } =
    editFormUserData || defaultState;

  const [state, dispatch] = React.useReducer(formReducer, initialState);

  React.useEffect(() => {
    dispatch({
      type: ACTIONS.populateForm as UserFormDataActionType,
      payload: editFormUserData,
    });
  }, [dispatch, editFormUserData]);

  const onSubmit = () => {
    if (state.errors && !!state.errors.length) {
      return false;
    }

    onSubmitHandler(state);

    dispatch({
      type: ACTIONS.clearForm as UserFormDataActionType,
      payload: initialState,
    });
  };

  return (
    <UserForm
      // findErrorMsg={findErrorMsg}
      // isErrorSet={isErrorSet}
      onSubmit={onSubmit}
      userState={state}
      setUserState={dispatch}
    />
  );
};

export default UserCardForm;
