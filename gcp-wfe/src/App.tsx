import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReceiveOffer from "./pages/ReceiveOffer/receiveOffer";
import PreBoarding from "./pages/PreBoarding/preBoarding";
import DayOne from "./pages/DayOne/dayOne";
import FirstNinetyDays from "./pages/FirstNinetyDays/firstNinetyDays";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/receiveOffer" element={<ReceiveOffer />} />
        <Route path="/preBoarding" element={<PreBoarding />} />
        <Route path="/dayOne" element={<DayOne />} />
        <Route path="/firstNinetyDays" element={<FirstNinetyDays />} />
      </Routes>
    </Router>
  );
}

export default App;
