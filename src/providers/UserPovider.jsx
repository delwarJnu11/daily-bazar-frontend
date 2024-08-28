import { useReducer } from "react";
import { UserContext } from "../contexts";
import { initialState, userReducer } from "../reducers/userReducer";

const UserPovider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserPovider;
