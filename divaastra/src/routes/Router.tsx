import About from "@shieldspire/pages/About";
import { Home } from "@shieldspire/pages/Home";
import NotFound from "@shieldspire/pages/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
