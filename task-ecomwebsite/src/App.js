import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/signIn/SignIn";
import Home from './pages/home/Home';
import ForgotPassWord from './components/forgotPassword/ForgotPassWord';
import Men from './pages/collections/men/Men';
import Women from './pages/collections/women/Women';
import ProductPage from './pages/Product Page/ProductPage';

function App() {
  return (
    <Router>
    <div style={{background: "linear-gradient(180deg, #F8F3F5 0%, #F8F2EF 33.85%)"
    }}>
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />   
      <Route path="/men" element={<Men />} />   
      <Route path="/women" element={<Women />} />
      <Route path="/products/:productID" element={<ProductPage />} />
      <Route path="/forgotPassword" element={<ForgotPassWord />} />      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
