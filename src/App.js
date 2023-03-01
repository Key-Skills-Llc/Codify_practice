import React from "react";
import { Route, Routes,  } from "react-router-dom";

import Main from "./components/Main/Main";
import Test from "./components/Test/Test";
import Posts from "./components/Posts/Posts";
import NotFound from "./components/NotFound/NotFound";
import MainPagesLayout from "./Pages/MainPageLayout/MainPagesLayout";

import EducationPage from "./Pages/EducationPage/EducationPage";
import EducationVideoPage from "./Pages/EducationVideoPage/EducationVideoPage";

import "./App.css";


const App = () =>  {
  return (
    <>
      <Routes>
        <Route element={<MainPagesLayout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/education" element={<EducationPage />}></Route>
          <Route path="/education/:id" element={<EducationVideoPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
