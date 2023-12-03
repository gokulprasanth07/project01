import { useEffect, useContext,useState  } from "react";
import PdListingCardForSmallSections from "./PdListingCardForSmallSections";

const PdListingPageForSmallSecWrapper = ({cartData}) => {
    useEffect(() => {
        console.log(">>> cartData in wrapper cmpt :", cartData.items);
    }, [cartData]);


    return (
        cartData?.items && cartData?.items?.length && cartData.items.map((pd) => (
            <PdListingCardForSmallSections pd={pd} />
        ))
    );
}

export default PdListingPageForSmallSecWrapper;
