import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from'@material-ui/core/styles'
import CustomBtn from './CustomBtn'

/**
 * Grid Style 
 * Author: Code Creative
 * Date: 25th Feb. 2021
 * Website: https://github.com/Tom0901/ReactDesignShowCase/blob/master/src/App.js
 */
const styles =  makeStyles({
   
    wrapper:{
     display: "flex",
     flexDirection: "column", 
     alignItems: "center", 
     padding: "0 5rem 0 5rem"
   },
   item: {
       paddingTop:"1rem"
   }
})

/**
 * GridComponent 
 * Author: Code Creative
 * Date: 25th Feb. 2021
 * Website: https://github.com/Tom0901/ReactDesignShowCase/blob/master/src/App.js
 */
function Grid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h5">{title}</Typography>
            <div className={classes.item}>
                <CustomBtn  txt={btnTitle}/>
            </div>
        </div>
    )
}

export default Grid
