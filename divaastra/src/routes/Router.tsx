import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@divaastra/pages/Home";
import About from "@divaastra/pages/About";
import NotFound from "@divaastra/pages/NotFound";
import Login from "@divaastra/pages/auth/Login";

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
