import {Route, Routes} from "react-router-dom";
import React from 'react';
import Main from "../routes/Main";
import Login from "../routes/Login";
import PrivateElement from "./PrivateElement";

export const paths = {
  main: '/',
  login: '/login',
  admin: '/admin',
}

const Router = () => {
  return (
    <Routes>
      <Route path={paths.login} element={<Login/>}/>
      <Route path={paths.main} exact element={<PrivateElement><Main/></PrivateElement>}/>
      <Route path={paths.admin} element={<PrivateElement><Main/></PrivateElement>}/>
      <Route path="*" element={<Login/>}/>
    </Routes>
  );
}

export default Router;
