import React, {useState, useEffect} from "react";
import ListingPageContainer from "./Component/ListingPage/ListingPageContainer";
import ProductPageComponent from "./Component/ProductPage/ProductPageComponent";
import HomePageComponent from "./Component/HomePage/HomePageComponent";
import useFetch from "./Utils/useFetch";
import LinearProgress from '@mui/material-next/LinearProgress';
import CircularProgress from '@mui/material-next/CircularProgress';

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

//styles
import "./Component/Styles/Loader.css";

export default function App() {
  const url = "https://dummyjson.com/products";
  const [data, isLoading, error] = useFetch(url);
  const [pdData, setPdData] = useState(data);
  const [currPdId, setCurrPdId] = useState(0);
  const [cartData, setCartData] = useState({'open': false, 'ids': [], 'items': []});

  useEffect(() => {
    setPdData(data);
    // console.log(">>> app.js did mount or update > data", data);
  }, [data]);

  if(false /*isLoading || error */ ){
    /* LOADER SECTION */
    return (
      <>
        <LinearProgress variant="indeterminate" />
        <br /> <br /> <br /> <br /> <br /> <br />
        <span style={{position: 'relative', left: '45%', paddingTop: '50px'}} className="circle-loader"><CircularProgress variant="indeterminate" /></span>
      </>
    );
  }

   return (
    <BrowserRouter>
    <Routes>
          <Route index element={<HomePageComponent data={pdData} setData={setPdData} cartData={cartData} setCartData={setCartData} />} />
          <Route path="listing-page" element={<ListingPageContainer data={pdData} />} />
          <Route path="product-page/:id" element={<ProductPageComponent data={pdData} setCurrPdId={setCurrPdId} cartData={cartData} setCartData={setCartData} />} />
    </Routes>
    </BrowserRouter>
  );
}