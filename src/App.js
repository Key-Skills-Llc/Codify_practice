import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main/Main";
import Test from "./components/Test/Test";
import Posts from "./components/Posts/Posts";
import Education from "./components/Education/Education";
import NotFound from "./components/NotFound/NotFound";
import MainPagesLayout from "./Pages/MainPageLayout/MainPagesLayout";

import "./App.css";
import MainLayout from "./Pages/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainPagesLayout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/education" element={<Education />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
