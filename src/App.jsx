import { BrowserRouter, Routes, Route } from "react-router";
import CreateProduct from "./pages/create/createProduct";
import EditProduct from "./pages/edit/editProduct";
import SingleProduct from "./pages/single/SingleProduct";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<CreateProduct/>} />
      <Route path="/edit/:id" element={<EditProduct/>} />
      <Route path="/product/:id" element={<SingleProduct/>} />



    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
