import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'

import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles}from '@material-ui/core/styles'

/**
 * NavComponents Style 
 * Author: Code Creative
 * Date: 25th Feb. 2021
 * Website: https://github.com/Tom0901/ReactDesignShowCase/blob/master/src/App.js
 */
const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

/**
 * NavComponents 
 * Author: Code Creative
 * Date: 25th Feb. 2021
 * Website: https://github.com/Tom0901/ReactDesignShowCase/blob/master/src/App.js
 */
function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>    
                <Typography variant="h6" className={classes.menuItem}>
                   Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   Books
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Search Books
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    My Orders
                </Typography>
                <CustomBtn txt="Library"/>
                <div className="search">
                    <i className="fa fa-search"></i>     
                    <i className="fa fa-shopping-basket"></i>
                </div>
            </Toolbar>
    )
}

/** <Typography variant="h6" className={classes.menuItem}>Demos 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography> 
                
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/>*/
export default NavBar
