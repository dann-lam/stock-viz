import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Display from "./pages/Display";

// import TickerMod from "./components/TickerMod";

export default function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div>
        <Navbar />
        <Display />
        <Footer />
      </div>
    </div>
  );
}
