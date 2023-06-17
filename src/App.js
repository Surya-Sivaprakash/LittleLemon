import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Page/Header";
import Footer from "./Page/Footer";
import Menu from "./Page/Menu";
import Home from "./Page/Home";
import ReservationForm from "./Component/ReservationForm";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ReservationPage" element={<ReservationForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
