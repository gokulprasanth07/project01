import ListingPageContainer from "../ListingPage/ListingPageContainer";
import Header from "./Header";
import SideNavBar from "./SideNavBar";

const HomePageComponent = ({ data, setData, cartData, setCartData }) => {
  return (
    <>
      <Header cartData={cartData} setCartData={setCartData} />
      <SideNavBar data={data} setData={setData} />
      <ListingPageContainer
        data={data}
        cartData={cartData}
        setCartData={setCartData}
      />
    </>
  );
};

export default HomePageComponent;
