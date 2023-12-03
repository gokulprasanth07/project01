import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useEffect } from 'react';
import PdListingPageForSmallSecWrapper from "./PdListingPageForSmallSecWrapper";
// import Drawer from '@mui/joy/Drawer';


const CartComponent = ({cartData, setCartData}) => {

    console.log(">cartData: ", cartData);

    useEffect(() => {
        // console.log(">>> cartData :", cartData);
    }, [cartData]);

    return(
        <SwipeableDrawer
        anchor={"right"}
        open={cartData && cartData.open}
        size="md"
        onOpen={() => setCartData({...cartData, open: true})}
        onClose={() => setCartData({...cartData, open: false})}
        // onOpen={toggleDrawer(anchor, true)}
        >
        <PdListingPageForSmallSecWrapper cartData={cartData} />
      </SwipeableDrawer>
    );
}


export default CartComponent;