import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import PartsFinder from "./pages/PartsFinder";

const App = () => {
  return (
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="brands/:brandName" element={<PartsFinder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
