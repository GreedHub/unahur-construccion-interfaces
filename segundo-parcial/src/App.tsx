import { BrowserRouter, Routes, Route } from "react-router-dom";

import ForumPost from "./views/post";
import NotFound from "./views/erros/404";
import Template from "./views/template";
import Home from "./views/home";

import "./App.scss";
import Profile from "./views/profile";
import SomethingWentWrong from "./views/erros/500";
import { useEffect, useState } from "react";
import { GetUserInfoById } from "./services/user";
import User from "./types/user";
import UserContext from "./context/user";
import Assignment from "./views/assignment";
import CareerView from "./views/career";
import InstituteView from "./views/institutte";

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    GetUserInfoById("bsmith43")
      .then((user) => setUser(user))
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: function (user: User) {
          this.user = user;
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home />} />
            <Route path="post" element={<ForumPost />} />
            <Route path="profile" element={<Profile />} />
            <Route path="error" element={<SomethingWentWrong />} />
            <Route path="assignment" element={<Assignment />} />
            <Route path="career" element={<CareerView />} />
            <Route path="institute" element={<InstituteView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
