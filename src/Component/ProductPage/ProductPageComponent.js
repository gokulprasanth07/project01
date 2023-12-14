import React, { useEffect, useState } from "react";

import Carousal from "./Carousal";
import ProductDetailsSection from "./ProductDetailsSection";
import PriceSection from "./PriceSection";
import "../Styles/PdPageStyles.css";

import Header from "../HomePage/Header";
import SideNavBar from "../HomePage/SideNavBar";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartComponent from "../CartPage/CartComponent";

const ProductPageComponent = ({ data, setCurrPdId, cartData, setCartData }) => {
  const [currentPd, setCurrentPD] = useState({});
  const [currnetPdId, setCurrentPdId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [uniqueIds, setUniqueIds] = useState([]);
  const [showSuccessCartToaster, setshowSuccessCartToaster] = useState(false);
  const [showWarningCartToaster, setshowWarningCartToaster] = useState(false);

  useEffect(() => {
    var url = window.location.pathname;
    var current_pd_id = window.location.pathname.substring(
      url.lastIndexOf("/") + 1
    );
    setCurrentPdId(current_pd_id);
    setCurrPdId(current_pd_id);
  }, []);

  useEffect(() => {
    if (data && Object.keys(data?.products).length && currnetPdId) {
      let currPd = data.products?.filter(
        (it) => it?.id === Number(currnetPdId)
      );
      setCurrentPD(currPd[0]);
    }
    setIsLoading(false);
  }, [currnetPdId]);

  const cartClickHandler = () => {
    if (!uniqueIds.includes(currnetPdId)) {
      setshowSuccessCartToaster(true);
      setTimeout(() => setshowSuccessCartToaster(false), 6000);
      uniqueIds.push(currnetPdId);
      setCartData({
        ...cartData,
        ids: [...cartData?.ids, currnetPdId],
        items: [...cartData?.items, currentPd],
      });
    } else {
      setshowWarningCartToaster(true);
      setTimeout(() => setshowWarningCartToaster(false), 6000);
    }
  };

  if (!currentPd || (currentPd && currentPd[0] && currentPd[0].length === 0)) {
    return null;
  }

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  const openCartSectionHandler = () => {
    setCartData({ ...cartData, open: true });
  };

  return (
    <>
      <Header />
      <SideNavBar />
      <div className="pd-page-wrapper">
        <div className="pd-section-01">
          {/* product img and carousal section */}
          <div className="pd-img-section">
            <Carousal currentPd={currentPd} />
          </div>
        </div>
        <div className="pd-section-02">
          {/* pd details section */}
          <ProductDetailsSection currentPd={currentPd} />
          {/* price and CTA buttons section */}
          <PriceSection
            currentPd={currentPd}
            showSuccessCartToaster={showSuccessCartToaster}
            showWarningCartToaster={showWarningCartToaster}
            cartClickHandler={cartClickHandler}
          />
        </div>
        {/* cart */}
        <CartComponent cartData={cartData} setCartData={setCartData} />
        <div className="open-cart-button">
          <Button
            variant="outlined"
            color="primary"
            onClick={openCartSectionHandler}
            endIcon={<ShoppingCartIcon />}
          >
            Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductPageComponent;
