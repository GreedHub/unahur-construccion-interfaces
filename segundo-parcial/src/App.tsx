import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Demo from "./views/demo";
import ForumPost from "./views/post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Demo />} />
          <Route path="post" element={<ForumPost />} />
          {/* <Route path="profile" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
