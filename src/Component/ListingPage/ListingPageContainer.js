import React, { useEffect } from "react";
import ListingPageComponent from "./ListingPageComponent";
import "../Styles/ListingPageStyles.css";

const ListingPageContainer = ({ data }) => {
  return (
    <ul className="ld-parent-ul">
      <ListingPageComponent data={data} />
    </ul>
  );
};

export default ListingPageContainer;
