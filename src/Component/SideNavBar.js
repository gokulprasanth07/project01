import   React, {useState, useEffect} from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import Devices from '@mui/icons-material/Devices';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Laptop } from '@mui/icons-material';
import SpaIcon from '@mui/icons-material/Spa';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './ListingPageStyles.css';





const SideNavBar = ({data, setData}) => {

    const[category, setCategory] = useState([]);

    useEffect(() => {
        let categories = [];
        // ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration']
        data && data.products && data.products.length && data.products.map((it) => {
            if(!categories.includes(it?.category)){
                categories.push(it?.category);
            }
        })
        if(categories && categories.length){
            setCategory(categories);
        }
        console.log("HERE :", categories);
    }, [data && data?.products]);
    
    const getIcon = (text) => (
        (text === "smartphones" ? <PhoneAndroid /> : (text === "laptops" ? <Devices/> : (text === "groceries" ? <LocalGroceryStoreIcon/> : (text === "skincare" ? <SpaIcon /> : (text === "home-decoration" ? <CoffeeMakerIcon /> : (text === "fragrances" ? <AccessibilityIcon /> : ""))))))
    );

    const actionHandler = (text) => {
        console.log("some");
        console.log("acn hand", data && data.products && data.products.length && data.products.filter(it => it.category === text));
        let filteredData = [];
        filteredData = data && data.products && data.products.length && data.products.filter(it => it.category === text);
        let newPdData = {'products': filteredData};
        setData(newPdData);
    }

    // if(category && category.length){
    //     return null;
    // }

    return (
     <div className="sidenavbar">
        <Drawer
        sx={{
          width: 200,
        //   backgroundColor: "pink",
        //   color: "red",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{
            sx: {
              backgroundColor: "lightgrey",
              color: "gray",
            }
          }}
        variant="permanent"
        anchor="left"
      >
        <span style={{padding: '12px'}}><LocalMallIcon fontSize='large'/></span>
        {/* <Toolbar /> */}
        <Divider />
        <List>
          {/* {['smartphones', 'laptops', 'groceries', 'fragrances', 'skincare','home-decoration' ].map((text, index) => ( */}
            {category && category.length ? category.map((text, index) => (
            <ListItem onClick={() => actionHandler(text)} key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    {getIcon(text)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )) : <h3></h3>}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PhoneAndroid />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      </div>
    );
}


export default SideNavBar;