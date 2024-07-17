import React from "react";

export default function Testimonial({children, src, alt, reviewer = "C.ool Dude", reviewerTitle = "CEO, Cowabunga Inc.", reviewText =  "Please pass in your review text view the 'reviewText' prop.",  ...rest}){
  if(src){
    return(
       <div className="box sidebar-image background-color">
        <div className="frame"><img className="testimonials-image" src={src} alt={alt}/></div>
        <div className="box"><div className="box testimonial-text"><p>{reviewText}</p></div>
        <div className="box reviewer-text">
        <p><span>{reviewer}</span></p>
        <p>{reviewerTitle}</p>
        </div>
        </div>
      </div>
    )} if(children){
    return(<div className="box center background-color"> 
      <div className="box">
        <div className="box testimonial-text">
          <p>{children}</p>
        </div>
    <div className="box reviewer-text">
       <p><span>{reviewer}</span></p>
       <p>{reviewerTitle}</p>
        </div>
      </div>
    </div>)
  }else {
    return(
      <div className="box center background-color"> 
        <div className="box">
          <div className="box testimonial-text">
            <p>{reviewText}</p>
          </div>
      <div className="box reviewer-text">
         <p><span>{reviewer}</span></p>
         <p>{reviewerTitle}</p>
          </div>
        </div>
      </div>
    )
  }
}
