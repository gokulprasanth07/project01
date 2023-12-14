import React, { useState, useEffect, useMemo, useCallback } from 'react';
import '../Styles/ListingPageStyles.css';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

//List 
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// icons
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import Devices from '@mui/icons-material/Devices';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SpaIcon from '@mui/icons-material/Spa';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const SideNavBar = ({ data, setData }) => {

  const [category, setCategory] = useState([]);
  useEffect(() => {
    let categories = [];
    // ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration']
    data && data.products && data.products.length && data.products.map((it) => {
      if (!categories.includes(it?.category)) {
        categories.push(it?.category);
      }
    })
    if (categories && categories.length) {
      setCategory(categories);
    }
  }, [data && data?.products]);

  const getIcon = (text) => (
    (text === "smartphones" ? <PhoneAndroid /> : (text === "laptops" ? <Devices /> : (text === "groceries" ? <LocalGroceryStoreIcon /> : (text === "skincare" ? <SpaIcon /> : (text === "home-decoration" ? <CoffeeMakerIcon /> : (text === "fragrances" ? <AccessibilityIcon /> : ""))))))
  );

  const getIconMemoized = useCallback((text) => getIcon(text), [getIcon]);

  const actionHandler = (text) => {
    let filteredData = [];
    filteredData = data && data.products && data.products.length && data.products.filter(it => it.category === text);
    let newPdData = { 'products': filteredData };
    setData(newPdData);
  }

  return (
    <div className="sidenavbar">
      <Drawer
        sx={{
          width: 200,
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
        <span style={{ padding: '12px' }}><LocalMallIcon fontSize='large' /></span>
        {/* <Toolbar /> */}
        <Divider />
        <List>
          {/* {['smartphones', 'laptops', 'groceries', 'fragrances', 'skincare','home-decoration' ].map((text, index) => ( */}
          {category && category.length ? category.map((text, index) => (
            <ListItem onClick={() => actionHandler(text)} key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {getIconMemoized(text)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )) : ""}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

export default SideNavBar;