import ListingPagePdCard from "./ListingPageCard";

const ListingPageComponent = ({ data }) => {
  return (
    <div className="listing-page-wrapper">
      {data &&
        data.products &&
        data.products.map((el) => <ListingPagePdCard data={el} />)}
    </div>
  );
};

export default ListingPageComponent;
