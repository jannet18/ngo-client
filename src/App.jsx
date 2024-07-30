import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Shop from "./pages/Shop";
import EnrollementForm from "./forms/EnrollementForm";
import Contact from "./pages/Contact";
import Events from "./components/Events";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/volunteer" element={<Volunteer />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/enroll" element={<EnrollementForm />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
