import React, { useState, useEffect } from "react";
import ListingPageContainer from "./Component/ListingPage/ListingPageContainer";
import ProductPageComponent from "./Component/ProductPage/ProductPageComponent";
import HomePageComponent from "./Component/HomePage/HomePageComponent";
import Loader from "./Component/HomePage/Loader";

import useFetch from "./Utils/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //routes

export default function App() {
  const url = "https://dummyjson.com/products";
  const [data, isLoading, error] = useFetch(url);
  const [pdData, setPdData] = useState(data);
  const [cartData, setCartData] = useState({ open: false, ids: [], items: [] });

  useEffect(() => {
    setPdData(data);
  }, [data]);

  if (isLoading || error) {
    /* LOADER SECTION */
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <HomePageComponent
              data={pdData}
              setData={setPdData}
              cartData={cartData}
              setCartData={setCartData}
            />
          }
        />
        <Route
          path="listing-page"
          element={<ListingPageContainer data={pdData} />}
        />
        <Route
          path="product-page/:id"
          element={
            <ProductPageComponent
              data={pdData}
              cartData={cartData}
              setCartData={setCartData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
