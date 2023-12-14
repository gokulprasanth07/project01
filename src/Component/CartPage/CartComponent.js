import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PdListingPageForSmallSecWrapper from "./PdListingPageForSmallSecWrapper";

const CartComponent = ({cartData, setCartData}) => {

    return(
        <SwipeableDrawer
        anchor={"right"}
        open={cartData && cartData.open}
        size="md"
        onOpen={() => setCartData({...cartData, open: true})}
        onClose={() => setCartData({...cartData, open: false})}
        >
        <PdListingPageForSmallSecWrapper cartData={cartData} setCartData={setCartData} />
      </SwipeableDrawer>
    );
}


export default CartComponent;