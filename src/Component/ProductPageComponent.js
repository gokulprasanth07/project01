import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, {useEffect, useState} from "react";
import Rating from '@mui/material/Rating';
import './PdPageStyles.css';
import Header from "./Header";
import SideNavBar from "./SideNavBar";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartComponent from "./CartComponent";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const ProductPageComponent = ({data, setCurrPdId, cartData, setCartData}) => {

    const [currentPd, setCurrentPD] = useState({});
    const [currnetPdId, setCurrentPdId] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [uniqueIds, setUniqueIds] = useState([]);


    useEffect(() => {
            var url = window.location.pathname;
            var current_pd_id = window.location.pathname.substring(url.lastIndexOf('/') + 1);
            console.log("changed", current_pd_id);
            setCurrentPdId(current_pd_id);
            setCurrPdId(current_pd_id);
    }, []);


    useEffect(() => {
        if(data && Object.keys(data?.products).length && currnetPdId){
                let currPd = data.products?.filter((it) => it?.id === Number(currnetPdId));
                setCurrentPD(currPd[0]);

        }
        setIsLoading(false);
    },[currnetPdId]);

    const cartClickHandler = () => {
        console.log(">>> otuside cart click", uniqueIds, currnetPdId);

        if(!uniqueIds.includes(currnetPdId)){
            console.log(">>> inside cart click");
            uniqueIds.push(currnetPdId);
            setCartData({...cartData, ids: [...cartData?.ids, currnetPdId], items: [...cartData?.items, currentPd]});
        }
    }


    if(!currentPd  || (currentPd && currentPd[0] && currentPd[0].length === 0)){
        return null;
    }

    if(isLoading){
        return (<h2>...Loading</h2>);
    }

    const openCartSectionHandler = () => {
        setCartData({...cartData, open: true});
    }


    return (
        <>
        <Header />
        <SideNavBar />
            <div className="pd-page-wrapper">
                <div className="pd-section-01">
                    <div className="pd-img-section">
                        <div className="carousal">
                            <Carousel>
                                { currentPd && currentPd.images && currentPd.images.length && currentPd.images.map((it) => 
                                    <img src={it} />
                                )}
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* pd details section */}
                <div className="pd-section-02">
                    {/* <div className="section-011">
                        <img className="product-image" src={currentPd.images[0]} />
                    </div> */}
                    <div className="section-022">
                        <div className="title"><strong><h2>{currentPd?.title}</h2></strong></div>

                        {/* ratings section */}
                        <div className="rating-container"><span className="rating-no">{Math.round(currentPd?.rating * 10) / 10}</span> &nbsp;
                            <Rating name="read-only" value={currentPd?.rating} readOnly />
                        </div>

                        {/* more details section */}
                        {/* <ul> */}
                        <br />
                                <div> <strong>Description: </strong>{currentPd?.description}
                                </div>
                            <div><strong>Brand Name: </strong>{currentPd?.brand} brand</div>
                            <div><strong>Category: </strong>{currentPd?.category} category</div>
                        {/* </ul> */}
                    </div>

                    <div className="left-section">
                        <Alert severity="info">
                            
                            only <strong>{currentPd.stock}</strong> left.! order soon
                        </Alert>
                    </div>
                    {/* price section */}
                    <div className="section-033">
                        <div className="price-section">
                            <span className="price"><strong>₹{currentPd?.price}</strong></span>
                            <span className="discounted-price"><del>₹{Math.ceil((currentPd?.price*currentPd?.discountPercentage)/100) + currentPd?.price}</del></span> &nbsp;
                            <span className="discount">{Math.round(currentPd?.discountPercentage)}% discount</span>
                        </div>

                        {/*CTA button section */}
                        <br /><br /><br />
                        <span className="wishlist">
                            <Button variant="outlined" endIcon={<FavoriteBorderIcon />}>
                                Wishlist
                            </Button></span>    
                         &nbsp;&nbsp;&nbsp;
                        <span className="cart-button" onClick={cartClickHandler}><Button variant="contained" endIcon={<ShoppingCartIcon />}>
                            Add To Cart
                        </Button></span>

                    </div>
                </div>

                {/* cart */}
                <CartComponent cartData={cartData} setCartData={setCartData}  />
                
                
                <div className="open-cart-button">
                    <Button variant="outlined" color="primary" onClick={openCartSectionHandler} endIcon={<ShoppingCartIcon />}>
                        Cart
                    </Button>
                </div>
            </div>
        </>
    );
}


export default ProductPageComponent;