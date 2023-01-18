import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Root from "./components/Root";
import Home from "./pages/Home";
import FormPage from './pages/FormPage'
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/form' element={<FormPage />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
