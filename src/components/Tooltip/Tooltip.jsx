import React from "react";

export default function Tooltip({children, title = "Tooltip default note title"}){
return(
  <div className="tooltip">
    <i className="fa-solid fa-info"></i>
    <p>{title}</p>
   <p>{children}</p> 
    <i className="fa-solid fa-xmark"></i>
  </div>
)
}