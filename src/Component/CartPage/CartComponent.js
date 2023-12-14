import React, { Suspense } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const PdListingPageForSmallSecWrapperComponent = React.lazy(() =>
  import("./PdListingPageForSmallSecWrapper")
);

const CartComponent = ({ cartData, setCartData }) => {
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={cartData && cartData.open}
      size="md"
      onOpen={() => setCartData({ ...cartData, open: true })}
      onClose={() => setCartData({ ...cartData, open: false })}
    >
      <Suspense fallback={() => <>...loading...</>}>
        <PdListingPageForSmallSecWrapperComponent
          cartData={cartData}
          setCartData={setCartData}
        />
      </Suspense>
    </SwipeableDrawer>
  );
};

export default CartComponent;
