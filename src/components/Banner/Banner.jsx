import React from "react";
import classNames from "classnames";

export default function Banner({children, status, className}){
  
  let statusClass = status && `banner-${status}`
  let bannerNeutral = status ? null : 'banner-neutral'
  let allClasses = classNames(statusClass, className, "box", "with-sidebar", bannerNeutral, "banner-text", "banner")
  
  if (status === "success") {
    return( <div className={allClasses}>
               <div className="center-flex"><span><i className="fa-regular fa-circle-check"></i></span></div>
               <div>{children}</div>
            </div>
            );
  } else if (status === "error") {
    return( <div className={allClasses}>
      <div className="center-flex"><span><i className="fa-solid fa-bug"></i></span></div>
      <div>{children}</div>
   </div>
   );
  } else if (status === "warning") {
    return( <div className={allClasses}>
      <div className="center-flex"><span><i className="fa-solid fa-triangle-exclamation"></i></span></div>
      <div>{children}</div>
   </div>
   );
  } 
  else{
    return(
      <div className={allClasses}>
        <div className="center-flex"><span><i className="fa-solid fa-circle-info"></i></span></div>
        <div>{children}</div>
      </div>
  )
  }
 
}