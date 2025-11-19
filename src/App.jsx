import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import CreateEditResume from "./pages/CreateEditResume";
import Dashboard from "./pages/Dashboard";
import ViewResume from "./pages/ViewResume";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEditResume />} />
        <Route path="/edit/:id" element={<CreateEditResume />} />
        <Route path="/view/:id" element={<ViewResume />} />
        <Route path="/resumes" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
