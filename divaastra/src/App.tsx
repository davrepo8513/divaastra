import React, { useState, useEffect } from "react";
import FuturisticLoader from "@divaastra/components/loaders/FuturisticLoader";
import "@divaastra/App.scss";
import AppRouter from "@divaastra/routes/Router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@divaastra/components/navbar/Navbar";
import Footer from "@divaastra/components/footer/Footer";
import IMAGES from "@divaastra/utils/constants/images";
import ErrorBoundary from "@divaastra/components/errorBoundary/ErrorBoundary";
import { AuthProvider } from "@divaastra/contexts/AuthContext";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Preload images at startup
  Object.values(IMAGES).forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FuturisticLoader />;
  }

  return (
    <div className="divaastra__application-wrapper">
      <AuthProvider>
        {" "}
        <BrowserRouter>
          <Navbar />
          <div className="divaastra__pages-wrapper">
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
