import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/screens/Navbar";
import Statistics from "./Components/screens/Statistics";
import SellingProducts from "./Components/screens/SellingProducts";
import Settings from "./Components/screens/Settings";
import Orders from "./Components/screens/Orders";
import Payments from "./Components/screens/Payments";
import Products from "./Components/screens/Products";
import Chat from "./Components/screens/Chatbox/Chat";
import PageNotFound from "./Components/screens/PageNotFound";
import HotSelling from "./Components/screens/HotSelling";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SellingProducts />
        <Routes>
          <Route
            path="/"
            element={<Statistics />}
          />
          <Route
            path="/summary"
            element={<Statistics />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/sellingproducts"
            element={<HotSelling />}
          />
          <Route
            path="/manageorder"
            element={<Orders />}
          />
          <Route
            path="/payments"
            element={<Payments />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />
          <Route
            path="/chat"
            element={<Chat />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
