import React from "react";
import classNames from "classnames";

export default function Badge({children, className, color, size, ...rest}){
  let colorClass = color && `badge-${color}`
  let allClasses = classNames(colorClass, className, "badge-styling")

 return(
  <span className={allClasses} {...rest}>
    {children}
  </span>
 )

}