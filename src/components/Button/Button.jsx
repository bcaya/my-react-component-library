import React from "react";
import classNames from 'classnames';

export default function Button ({children, className, size, variant, ...rest}){
  let sizeClass = size && `button-${size}`
  let variantClass = variant && `button-${variant}`
  let allClasses = classNames(sizeClass, variantClass, className)

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  )
}