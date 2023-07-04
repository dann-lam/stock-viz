import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Display from "./pages/Display";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <p>Using Chart.js in React</p>
      <Display />
      <Footer />
    </div>
  );
}
