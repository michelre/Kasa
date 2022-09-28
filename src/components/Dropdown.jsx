import React from "react";

function Dropdown (props){
    return (
        <details
            className="dropdown"
            open={props.open}
        >
            <summary>{props.text}</summary>
            <div>
              {props.children}
            </div>
      </details>
    )
}

export default Dropdown

