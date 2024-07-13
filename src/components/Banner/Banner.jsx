import React from "react";
import classNames from "classnames";

export default function Banner({children, status, className}){
  
  let statusClass = status && `banner-${status}`
  let bannerNeutral = status ? null : 'banner-neutral'
  let allClasses = classNames(statusClass, className, "box", "with-sidebar", bannerNeutral, "banner-text", "banner")
  let icon;
  if (status === "success") {
    icon = <span><i className="fa-regular fa-circle-check"></i></span>;
  } else if (status === "error") {
     icon = <span><i className="fa-regular fa-circle-xmark"></i></span>; // Example for an error status
  } else if (status === "warning") {
     icon = <span><i class="fa-solid fa-circle-exclamation"></i></span>; // Example for a warning status
  } 

  
  return(
      <div className={allClasses}>
        <div className="center-flex">{status ? icon : <span><i class="fa-solid fa-circle-info"></i></span> }</div>
        <div >{children}</div>
      </div>
  )
}