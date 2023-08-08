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
import Footer from './Footer';
 

const Main = (props) => {
    const theme = createTheme({
        status: {
          danger: orange[500],
        },
      });
    return (
        < >
        <ThemeProvider theme={ Theme}>
        <CssBaseline />
        <Container maxWidth="lg">
            </Container>
            </ThemeProvider>
        <Footer description={"2023"} title='TTCo.'></Footer>
        </>
    )
}
    
export default Main;

