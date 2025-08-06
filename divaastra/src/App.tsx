import "@divaastra/App.scss";
import ErrorBoundary from "@divaastra/components/errorBoundary/ErrorBoundary";
import Footer from "@divaastra/components/footer/Footer";
import FuturisticLoader from "@divaastra/components/loaders/FuturisticLoader";
import Navbar from "@divaastra/components/navbar/Navbar";
import { AuthProvider } from "@divaastra/contexts/AuthContext";
import AppRouter from "@divaastra/routes/Router";
import IMAGES from "@divaastra/utils/constants/images";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

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
