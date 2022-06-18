import {Route, Routes} from "react-router-dom";
import React from 'react';
import Main from "../routes/Main";
import Login from "../routes/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
  );
}

export default Router;
