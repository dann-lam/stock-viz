import "./App.css";
import React from "react";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
//
import Display from "./pages/Display";
// import TickerMenu from "./components/TickerMenu";

//App -- main container
//Display -- container for majority of functions.
export default function App() {
  return (
    <div className="App flex flex-col min-h-screen items-center">
      <Navbar />
      <Display />
      {/* <Footer /> */}
    </div>
  );
}
