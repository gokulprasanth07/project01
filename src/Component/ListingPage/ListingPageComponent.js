import React, { Suspense, lazy } from "react";

const ListingPagePdCardComponent = lazy(() =>
  import("./ListingPageCard")
);

const ListingPageComponent = ({ data }) => {
  return (
    <div className="listing-page-wrapper">
      {data &&
        data.products &&
        data.products.map((el) => (
            <Suspense key={el.id} fallback={() => (<>...loading...</>)}>
                <ListingPagePdCardComponent data={el} />
            </Suspense>
        ))}
    </div>
  );
};


export default ListingPageComponent;