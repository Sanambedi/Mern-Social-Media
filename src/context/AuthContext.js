import { createContext,  useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
 user:{ _id
:
"60decbae186b0c20d8ba7368",
profilePicture
:
"",
coverPicture
:
"",
followers
:[],
followings:[],
isAdmin
:
false,
username
:
"James",
email
:
"johnJames@gmail.com",
password
:
"$2b$10$oMKd3FFd4cwJOXD6XUnpWOB5Fi3X9hW0whcv/iDozHBymxqpfagQK",
 },
isFetching:false,
error:false

};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
