import { useEffect  } from "react";
import ListingPagePdCard from "../Component/ListingPageCard";
import Pagination from '@mui/material/Pagination';



const ListingPageComponent = ({ data }) => {
    let categories = [];

    useEffect(() => {
        console.log("listing page component", data);
    }, [data]);

    return (
            <div className="listing-page-wrapper">
                {data && data.products && (
                    data.products.map((el) => (
                        <ListingPagePdCard data={el} />
                    ))
                )}

                {/* PAGINATION */}
                {/* <Pagination count={10} /> */}
            </div>
    );

}

export default ListingPageComponent;