import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout";
import LandingPage from "./components/pages/LandingPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
