import About from "@divaastra/pages/About";
import Home from "@divaastra/pages/Home";
import NotFound from "@divaastra/pages/NotFound";
import Login from "@divaastra/pages/auth/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
