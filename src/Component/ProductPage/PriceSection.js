import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import "../Styles/PdPageStyles.css";

const PriceSection = ({
  currentPd,
  cartClickHandler,
  showSuccessCartToaster,
  showWarningCartToaster,
}) => {
  return (
    <div className="section-033">
      <div className="price-section">
        <span className="price">
          <strong>₹{currentPd?.price}</strong>
        </span>
        <span className="discounted-price">
          <del>
            ₹
            {Math.ceil(
              (currentPd?.price * currentPd?.discountPercentage) / 100
            ) + currentPd?.price}
          </del>
        </span>{" "}
        &nbsp;
        <span className="discount">
          {Math.round(currentPd?.discountPercentage)}% discount
        </span>
      </div>

      {/*CTA button section */}
      <div className="cta-section">
        <span className="wishlist">
          <Button variant="outlined" endIcon={<FavoriteBorderIcon />}>
            Wishlist
          </Button>
        </span>
        <span className="space-cta-btns"> &nbsp;&nbsp;&nbsp; </span>
        <span className="cart-button" onClick={cartClickHandler}>
          <Button variant="contained" endIcon={<ShoppingCartIcon />}>
            Add To Cart
          </Button>
        </span>
      </div>
      <Snackbar
        open={showSuccessCartToaster}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Item has been added to cart
        </Alert>
      </Snackbar>
      <Snackbar
        open={showWarningCartToaster}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="warning" sx={{ width: "100%" }}>
          Same item cannot be added to cart
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PriceSection;
