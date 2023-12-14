import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carousal = ({ currentPd }) => {
  return (
    <div className="carousal">
      <Carousel>
        {currentPd &&
          currentPd.images &&
          currentPd.images.length &&
          currentPd.images.map((it) => <img src={it} />)}
      </Carousel>
    </div>
  );
};

export default Carousal;
