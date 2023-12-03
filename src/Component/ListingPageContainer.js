import React, { useEffect, useState, useContext } from "react";
import useFetch from "../Utils/useFetch";
import {Link} from "react-router-dom";
import ListingPageComponent from "./ListingPageComponent";

const ListingPageContainer = ({data}) => {
    // console.log(">>> LP CONT", data);
    useEffect(() => {
        console.log("listing page container", data);
    }, [data]);
    return (
        <ul>
                <ListingPageComponent data={data} />
        </ul>
    );
}


export default ListingPageContainer;