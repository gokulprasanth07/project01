import PdListingCardForSmallSections from "./PdListingCardForSmallSections";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const PdListingPageForSmallSecWrapper = ({cartData, setCartData}) => {
    if (!cartData?.items || cartData?.items?.length === 0) {
      return (
        <Alert severity="warning">
          <AlertTitle>No Products</AlertTitle>
          There are no products added in the cart<br />
          <strong>Please add some products to cart</strong>
        </Alert>
      );
    }
    return (
        <div style={{padding: '10px'}} className="small-pd-listing-page-wrapper">
            {cartData?.items && cartData?.items?.length && cartData.items.map((pd) => (
            <PdListingCardForSmallSections pd={pd} setCartData={setCartData} cartData={cartData} />
        ))}
        </div>
    );
}

export default PdListingPageForSmallSecWrapper;
