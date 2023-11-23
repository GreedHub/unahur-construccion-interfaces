import { createContext } from "react";
import User from "../types/user";

type UserContextType = {
  user: User | undefined;
  setUser: (user: User) => void;
};

const defaultContext: UserContextType = {
  user: undefined,
  setUser: function (user: User) {
    this.user = user;
  },
};

const UserContext = createContext<UserContextType>(defaultContext);

export default UserContext;
