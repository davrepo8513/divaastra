import React, { useState, useEffect } from "react";
import AppLoader from "./components/loaders/app-loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or initialization
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AppLoader message="Initializing Application..." />;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">✅ App Loaded Successfully!</h1>
    </div>
  );
};

export default App;
