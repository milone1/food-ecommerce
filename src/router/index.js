 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Ecommerce from "../layouts";
 import Popular from "../pages/popular/index";
 import BasketView from "../pages/basket";
 import Login from "../pages/login/index"; 

 const Router = () => {

   return (
     <BrowserRouter>
       <Routes>
        <Route element={<Ecommerce />}>
          <Route path="/" element={<Popular />} />
          <Route path="/basket" element={<BasketView />} />
          <Route path="/login" element = {<Login />} />
        </Route>
       </Routes>
     </BrowserRouter>
   );
 };
 
 export default Router;