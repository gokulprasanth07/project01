import React from "react";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";

import "../Styles/ListingPageStyles.css";
import { useNavigate } from "react-router-dom";

import { useInView } from "react-intersection-observer"; // for lazy loading with intersection observer
import Loader from "../HomePage/Loader";

const ListingPagePdCard = ({ data }) => {
  const navigate = useNavigate();

  const [ref, insideView] = useInView({
    triggerOnce: false,
  });

  return (
    <div
      onClick={() => navigate(`/product-page/${data?.id}`)}
      className="listing-card-wrapper"
      ref={ref}
    >
      {insideView ? (<div className="lazy-load-container.in-view"><Paper elevation={8}>
        <div className="listing-card">
          <div className="section-01">
            <img className="product-image" src={data.images[0]} />
          </div>
          <div className="section-02">
            <div className="title">
              <strong>{data?.title}</strong>
            </div>

            {/* ratings section */}
            <div className="rating-container">
              <span className="rating-no">
                {Math.round(data?.rating * 10) / 10}
              </span>{" "}
              &nbsp;
              <Rating name="read-only" value={data?.rating} readOnly />
            </div>

            {/* more details section */}
            <br />
            <li className="pd-desc">
              <div>{data?.description}</div>
            </li>
            <li>
              <div>{data?.brand} brand</div>
            </li>
            <li>
              <div>{data?.category} category</div>
            </li>
          </div>

          {/* price section */}
          <div className="section-03">
            <div className="price-section">
              <span className="price">
                <strong>₹{data?.price}</strong>
              </span>
              <span className="discounted-price">
                <del>
                  ₹
                  {Math.ceil((data?.price * data?.discountPercentage) / 100) +
                    data?.price}
                </del>
              </span>{" "}
              &nbsp;
              <span className="discount">
                {Math.round(data?.discountPercentage)}% discount
              </span>
            </div>
          </div>
        </div>
      </Paper></div>) : (<Loader />)}
    </div>
  );
};

export default ListingPagePdCard;
