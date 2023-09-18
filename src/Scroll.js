import React from "react";


const Scroll = (props) => {
    
    return (
        <div style={{overflow:'scroll', border:'1px solid black', height:'80vh', overflowX:'hidden'}}>
            {props.children}
        </div>
    )
}

export default Scroll;