import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/volunteer" element={<Volunteer />} />
        <Route exact path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
