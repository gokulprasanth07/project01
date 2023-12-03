// import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './ListingPageStyles.css';
import { useEffect } from 'react';

const Header = ({cartData, setCartData}) => {

    useEffect(() => {
        // console.log(">>> inside header, cartData : ", cartData);
    }, []);

    return (
        <div className='header-wrapper'>
            {/* <AppBar position="static"> */}
                {/* <Toolbar variant="dense" sx={{ bgcolor: "lightgray", paddingLeft: 200 }}> */}
                    <div className='header-text'>
                        <div><h3 style={{color: 'black'}}>E COMMERCE WEBSITE</h3></div>
                    </div>
   
                {/* </Toolbar> */}
            {/* </AppBar> */}
        </div>
    );
}


export default Header;