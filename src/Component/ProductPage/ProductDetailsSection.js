import Rating from "@mui/material/Rating";
import Alert from "@mui/material/Alert";

const ProductDetailsSection = ({ currentPd }) => {
    console.log(">>> PD :", Math.round(currentPd?.rating * 10) / 10 );
  return (
    <>
      <div className="section-022">
        <div className="title">
          <strong>
            <h2>{currentPd?.title}</h2>
          </strong>
        </div>

        {/* ratings section */}
        <div className="rating-container">
          <span className="rating-no">
            {Math.round(currentPd?.rating * 10) / 10}
          </span>{" "}
          &nbsp;
          <Rating name="read-only" value={currentPd?.rating} readOnly />
        </div>

        {/* more details section */}
        {/* <ul> */}
        <br />
        <div>
          {" "}
          <strong>Description: </strong>
          {currentPd?.description}
        </div>
        <div>
          <strong>Brand Name: </strong>
          {currentPd?.brand} brand
        </div>
        <div>
          <strong>Category: </strong>
          {currentPd?.category} category
        </div>
        {/* </ul> */}
      </div>

      <div className="left-section">
        <Alert severity="info">
          only <strong>{currentPd.stock}</strong> left.! order soon
        </Alert>
      </div>
    </>
  );
};

export default ProductDetailsSection;
