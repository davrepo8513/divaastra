import "@shieldspire/App.scss";
import ErrorBoundary from "@shieldspire/components/errorBoundary/ErrorBoundary";
import FuturisticLoader from "@shieldspire/components/loaders/FuturisticLoader";
import { AuthProvider, useAuth } from "@shieldspire/contexts/AuthContext";
import LoginForm from "@shieldspire/pages/auth/Login";
import AppRouter from "@shieldspire/routes/Router";
import IMAGES from "@shieldspire/utils/constants/images";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Object.values(IMAGES).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <FuturisticLoader />;

  if (!isAuthenticated) {
    return (
      <div className="shieldspire__login-wrapper">
        <LoginForm />
      </div>
    );
  }

  return (
    <>
      <Layout>
        <div className="shieldspire__pages-wrapper">
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </div>
      </Layout>
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="shieldspire__application-wrapper">
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
