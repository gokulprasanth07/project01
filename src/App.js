import React, {useState, useEffect, useLayoutEffect} from "react";
import ListingPageContainer from "./Component/ListingPageContainer";
import ProductPageComponent from "./Component/ProductPageComponent";
import HomePageComponent from "./Component/HomePageComponent";
import useFetch from "./Utils/useFetch";
import LinearProgress from '@mui/material-next/LinearProgress';
import CircularProgress from '@mui/material-next/CircularProgress';


//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const url = "https://dummyjson.com/products";
  const [data, isLoading, error, setData] = useFetch(url);
  const [pdData, setPdData] = useState(data);
  const [currPdId, setCurrPdId] = useState(0);
  const [cartData, setCartData] = useState({'open': false, 'ids': [], 'items': []});
  const [wishlistData, setWishlistData] = useState({'open': false, 'ids': []});

  // const [cartPdIds, setCartPdIds] = useState([]);
  // const [isCartOpen, setisCartOpen] = useState(false);
  // const [wishlistPdIds, setwishlistPdIds] = useState([]);
  // const [isWishlistOpen, setisWishlistOpen] = useState(false);


  
  // if(isLoading){
  //     console.log(">>> app.js > loading :", isLoading);
  // } else if(error){
  //     console.log(">>> app.js > error :", error);
  // } else if(data){
  //     console.log(">>> app.js > data :", data);
  // }



 useEffect(() => {
	// console.log("Component rendered successfully");
  }, []);


  useEffect(() => {
    setPdData(data);
    // console.log(">>> app.js did mount or update > data", data);
  }, [data]);

  useEffect(() => {
    // console.log(">>> app.js PD ID", currPdId);
  }, [currPdId]);



  if(isLoading || error ){
    /* LOADER SECTION */
    return (
      <>
        <LinearProgress variant="indeterminate" />
        <br /> <br /> <br /> <br /> <br /> <br />
        <span style={{position :'relative', left:'45%'}}><CircularProgress variant="indeterminate" /></span>
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