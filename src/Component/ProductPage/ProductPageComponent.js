import React, { useEffect, useState } from "react";

// component
import Header from "../HomePage/Header";
import SideNavBar from "../HomePage/SideNavBar";
import Carousal from "./Carousal";
import ProductDetailsSection from "./ProductDetailsSection";
import PriceSection from "./PriceSection";
import CartComponent from "../CartPage/CartComponent";

// styles
import "../Styles/PdPageStyles.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductPageComponent = ({ data, cartData, setCartData }) => {
  const [currentPd, setCurrentPd] = useState({});
  const [currentPdId, setCurrentPdId] = useState(1);
  const [uniquePdIds, setUniquePdIds] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessCartToaster, setshowSuccessCartToaster] = useState(false);
  const [showWarningCartToaster, setshowWarningCartToaster] = useState(false);

  useEffect(() => {
    let url = window.location.pathname;
    let current_pd_id = window.location.pathname.substring(
      url.lastIndexOf("/") + 1
    );
    setCurrentPdId(current_pd_id);
  }, []);

  useEffect(() => {
    if (data && Object.keys(data?.products).length && currentPdId) {
      let currPd = data.products?.filter(
        (it) => it?.id === Number(currentPdId)
      );
      setCurrentPd(currPd[0]);
    }
    setIsLoading(false);
  }, [currentPdId]);

  const cartClickHandler = () => {
    if (!uniquePdIds.includes(currentPdId)) {
      setshowSuccessCartToaster(true);
      setTimeout(() => setshowSuccessCartToaster(false), 6000);
      setUniquePdIds([...uniquePdIds, currentPdId]);
      setCartData({
        ...cartData,
        ids: [...cartData?.ids, currentPdId],
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
