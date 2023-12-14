import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "../Styles/smallPdPageStyles.css";

const PdListingCardForSmallSections = ({ pd, setCartData, cartData }) => {

  const removeFromCartActionHandler = () => {
    let deletedArrItems = cartData?.items.filter((it) => it.id !== pd?.id);
    let deletedArrIds = cartData?.ids.filter((it) => it !== pd?.id);
    setCartData({ ids: deletedArrIds, items: deletedArrItems });
  };

  return (
    <div className="small-pd-section-card" key={pd.id}>
      <Paper elevation={20}>
        <div className="section-01">
          <img className="product-image" src={pd.images[0]} />
        </div>
        <div className="section-02">
          <div className="title">
            <strong>{pd?.title}</strong>
          </div>
          {/* more details section */}
          <ul>
            <li>
              <div>{pd?.brand} brand</div>
            </li>
            <li>
              <div>{pd?.category} category</div>
            </li>
            <li>
              <div>only {pd.stock} left.!</div>
            </li>
          </ul>
        </div>
        {/* price section */}
        <div className="section-03">
          <div className="price-section">
            <span className="price">
              <strong>₹{pd?.price}</strong>
            </span>
            <span className="discounted-price">
              <del>
                ₹
                {Math.ceil((pd?.price * pd?.discountPercentage) / 100) +
                  pd?.price}
              </del>
            </span>{" "}
            &nbsp;
            <span className="discount">
              {Math.round(pd?.discountPercentage)}% discount
            </span>
          </div>
        </div>
        {/* CTA section */}
        <div className="cta-section">
          <div className="remove-from-cart-wrapper" onClick={removeFromCartActionHandler}>
            <Button
              size="small"
              variant="outlined"
              endIcon={<RemoveShoppingCartIcon />}
            >
              Remove from cart
            </Button>
          </div>
          <div>
            <Button
              size="small"
              variant="contained"
              color="primary"
              endIcon={<ShoppingCartCheckoutIcon />}
            >
              Check out
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default PdListingCardForSmallSections;
