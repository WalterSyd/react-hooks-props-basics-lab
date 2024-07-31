// src/components/Links.js
import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github} target="_blank" rel="noopener noreferrer">  
        {props.github}
      </a>
      <br />
      <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
        {props.linkedin}
      </a>
    </div>
  );
}

export default Links;

// _blank ; This attribute ensures that the link opens in a new tab or window when clicked.
//rel="noopener noreferrer": This attribute is a security feature that prevents the new page from being able to access the original page's window object. 
//It also prevents potential performance issues.