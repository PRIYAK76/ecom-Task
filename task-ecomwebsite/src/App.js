import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/signIn/SignIn";
import Home from './pages/Home/Home';
import ForgotPassWord from './components/forgotPassword/ForgotPassWord';
import Men from './pages/collections/men/Men';
import Women from './pages/collections/women/Women';
import ProductPage from './pages/Product Page/ProductPage';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkOut/CheckOut';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/forgotPassword" element={<ForgotPassWord />} />
          <Route path="/cartItems" element={<Cart />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
    </Router>
  );
}

export default App;
