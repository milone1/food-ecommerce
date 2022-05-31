 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Ecommerce from "../layouts";
 import Popular from "../pages/popular/index";
 import BasketView from "../pages/basket";

 const Router = () => {

   return (
     <BrowserRouter>
       <Routes>
        <Route element={<Ecommerce />}>
          <Route path="/" element={<Popular />} />
          <Route path="/basket" element={<BasketView />} />
        </Route>
       </Routes>
     </BrowserRouter>
   );
 };
 
 export default Router;