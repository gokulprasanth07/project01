import ListingPageContainer from "./ListingPageContainer";
import Header from "./Header";
import { useEffect, useContext,useState  } from "react";
import SideNavBar from "./SideNavBar";
// import { useEffect } from "react";

const HomePageComponent = ({data, setData, cartData, setCartData }) => {

    useEffect(() => {
        // console.log(">>> HP CHANGESSSS...", setCartData);
    }, [data]);


    return (
        <>
            <Header cartData={cartData} setCartData={setCartData} />
            <SideNavBar data={data} setData={setData}  />
            <ListingPageContainer data={data} cartData={cartData} setCartData={setCartData} />
        </>
    );
}

export default HomePageComponent;