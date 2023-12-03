import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';

const PdListingCardForSmallSections = ({pd}) => {

    console.log(">>> title: ", pd?.title);
    // return (<h2>{pd?.title}</h2>);

    return (
        <Paper elevation={8}>
                <div className="listing-card">
                    <div className="section-01">
                        {/* <img className="product-image" src={pd.images[0]} /> */}
                    </div>
                    <div className="section-02">
                        <div className="title"><strong>{pd?.title}</strong></div>

                        {/* ratings section */}
                        <div className="rating-container"><span className="rating-no">{Math.round(pd?.rating * 10) / 10}</span> &nbsp;
                            <Rating name="read-only" value={pd?.rating} readOnly />
                        </div>

                        {/* more details section */}
                        {/* <ul> */}
                            <li>
                                <div>{pd?.description}
                                </div>
                            </li>
                            <li><div>{pd?.brand} brand</div></li>
                            <li><div>{pd?.category} category</div></li>
                        {/* </ul> */}
                    </div>

                    {/* price section */}
                    <div className="section-03">
                        <div className="price-section">
                            <span className="price"><strong>₹{pd?.price}</strong></span>
                            <span className="discounted-price"><del>₹{Math.ceil((pd?.price*pd?.discountPercentage)/100) + pd?.price}</del></span> &nbsp;
                            <span className="discount">{Math.round(pd?.discountPercentage)}% discount</span>
                        </div>
                            
                    </div>
                </div>
            </ Paper>
    );
}


export default PdListingCardForSmallSections;