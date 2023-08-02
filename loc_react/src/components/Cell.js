import classes from './Style.module.css'

// click event needs to be added to this
import React from 'react'



const Cell = (props) => {
    // console.log("This is props id")
    // console.log(props.id)
    
      
   

    return (
        <div
            className={classes.cell}
            key = {props.id}
            data-number={props.id}
            onClick={props.clickCell}
            >
            {props.value}
          
        </div>
    )
}

export default Cell;