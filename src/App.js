import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CreateItem from "./pages/CreateItem";
import NoMatch from "./pages/NoMatch";
import ProductsList from "./pages/ProductsList";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<ProductsList />} />
    <Route path="shopping-cart" element={<ShoppingCart />} />
    <Route path="create-item" element={<CreateItem />} />
    <Route path="*" element={<NoMatch />} />
   </Route>
  </Routes>
 );
}

export default App;
