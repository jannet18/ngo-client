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
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import MpesaPaymentForm from "./forms/MpesaPaymentForm";
import Dashboard from "./dashboard/Dashboard";

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
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/mpesa" element={<MpesaPaymentForm />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
