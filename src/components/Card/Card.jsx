import React from "react";

export default function Card({children = "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.", icon = <i className="fa-solid fa-arrow-up"></i>, title = "Easy Deployment", ...rest}){
 
    return(
      <div className="box stack-sm">
        <div className="with-icon">{icon}</div>
        <h3>{title}</h3>
        <p className="zero-padding">{children}</p>
      </div>
    )
}

