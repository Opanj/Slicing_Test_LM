import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AuthLayout from "./layouts/authLayout";
import ProductPage from "./pages/products/product";
import AuthProductLayout from "./layouts/productLayout";
import ProductBankPage from "./pages/products/productBank";
import ProductBankView from "./components/fragments/products/ProductBank/productBankView";
import DeveloperView from "./components/fragments/products/ProductBank/productDev";
import Navbar from "./components/elements/navbar/navbar";
import ProductDetailBank from "./components/fragments/products/ProductBank/ProductDetailBank";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Dashboard */}
          <Route path="/dashboard" element={<AuthLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* Products */}
            <Route path="products" element={<AuthProductLayout />}>
              {/* Product Bank  */}
              <Route path="productbank" element={<ProductBankPage />}>
                <Route index element={<ProductBankView />} />
                {/* Product Detail */}
                <Route path=":name" element={<ProductDetailBank />} />
                <Route path="developer" element={<DeveloperView />} />
              </Route>
              <Route path="product" element={<ProductPage />} />
              <Route path="productcategory" element={<ProductPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
