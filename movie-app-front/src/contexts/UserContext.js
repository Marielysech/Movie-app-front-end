import React, { useContext } from "react";

export const UserContext = React.createContext({});

const UserContextProvider = ({children, user}) => {
  return (
    <UserContext.Provider value={user}>
    {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
