import React, { useEffect } from "react";
import SpaceService from "./graphql";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/dashboard";
import { useDispatch } from "react-redux";
import { datastore } from "./Redux/action";

function App() {
  const dispath = useDispatch();
  const load = async () => {
    const spaceMission = await SpaceService.getSpaceMission();
    console.log(spaceMission.launches, "spaceMission");
    dispath(datastore(spaceMission.launches));
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <BrowserRouter basename="/SpaceX-GraphQl-React">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
