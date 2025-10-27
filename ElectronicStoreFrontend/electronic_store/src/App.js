import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Service from "./pages/service";
import Cart from "./pages/cart";
import Dashboard from "./pages/users/dashboard";
import Profile from "./pages/users/profile";
import AboutUser from "./pages/users/AboutUser";
import CustomNavbar from "./components/Navbar";
import Contact from "./pages/contact";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  return (
    // setting up

    <BrowserRouter>
      <ToastContainer position="bottom-center" theme="light" />
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/users" element={<Dashboard />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="about" element={<AboutUser />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
