import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Services from "./pages/services";
import Bmr from "./pages/bmr";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Error from "./pages/error";
import UpdateUser from './pages/UpdateUser';
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoute element={Home} />} />
          <Route path="/services" element={<ProtectedRoute element={Services} />} />
          <Route path="/bmr" element={<ProtectedRoute element={Bmr} />} />
          <Route path="/privacy" element={<ProtectedRoute element={Privacy} />} />
          <Route path="/contact" element={<ProtectedRoute element={Contact} />} />
          <Route path="/user/:id" element={<ProtectedRoute element={UpdateUser} />} />
          <Route path="/admin" element={<ProtectedRoute element={Admin} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Omar = () => {
  const name = "omar";
  return (
    <>
      <h1>{name ? "welcome" : "notfound"}</h1>
    </>
  );
};
export default App;
