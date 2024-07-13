import React from "react";
import classNames from "classnames";

export default function BannerText({children, className}){
  let allClasses = classNames( className)
  return(
      <p className={allClasses}>
         {children}
      </p>
  )
}