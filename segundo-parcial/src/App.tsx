import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Demo from "./views/demo";
import ForumPost from "./views/post";
import NotFound from "./views/erros/404";
import Template from "./views/template";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Demo />} />
          <Route path="post" element={<ForumPost />} />
          {/* <Route path="profile" element={<Contact />} />*/}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
