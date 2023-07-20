import React, { useEffect, useState } from 'react'
     import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
 import Sidebar from './Sidebar';
import Footer from './Footer';

const Main = (props) => {
    // const [products, setproducts] = useState(null);
    // const [loaded, setLoaded] = useState(false);
    
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/product')
    //         .then(res=>{
    //             setproducts(res.data);
    //             setLoaded(true);
    //         })
    //         .catch(err => console.error(err));
    // },[products]);
    

    // const removeFromDom = personId => {
    //     setproducts(products.filter(pr => pr._id != prId));
    // }


    return (
        <div>
 
        
        </div>
    )
}
    
export default Main;

