import React, { useContext } from "react";

export const FavContext = React.createContext();

const FavContextProvider = ({children, favFetch}) => {
  return (
    <FavContext.Provider getFav={favFetch}>
    {children}
    </FavContext.Provider>
  );
};

export const useFavContext = () => {
  return useContext(FavContext);
};

export default FavContextProvider;
