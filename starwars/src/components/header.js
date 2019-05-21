import React from 'react';

const MyHeader = props => {
    return(
        <div>
           <h1 className="Header"><button className="before" onClick={props.before}> Previous </button>React Wars<button className="after" onClick={props.after}>Next</button></h1>
        </div>
    )
}

export default MyHeader;