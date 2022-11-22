import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ROUTES } from './ROUTES'
import HomeScreen from '../screens/Home/Home'
import ProductDetailScreen from "../screens/ProductDetail/ProductDetail";

const RootNavigation = () => {
  /**
   * UseState & constant Section Start From Here
   */

  /**
   * UseState & constant end From Here
   */

  /**
   * UseEffect Section Start From Here
   */



  return (
    <>
      <Routes>
        <Route path={ROUTES.Home.page_path}
          element={<HomeScreen
          />} />
        <Route
          path={ROUTES.ProductDetail.page_path}
          element={<ProductDetailScreen
          />} />

      </Routes>
    </>
  )
}
export default RootNavigation