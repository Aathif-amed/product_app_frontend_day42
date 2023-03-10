import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import {config} from "./config"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Login from "./Login";
import Registration from "./Registration";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/user/register" element={<Registration/>} />
      <Route path="/product" element={<Product/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
