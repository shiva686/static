import React from 'react';
import services from './photos/services.jpg'

const Service = () => {
  return(
 
 	<>
  <div className="container-fluid">
 	  <div className = "row md">
 	     <div className = "col-md-6 mdf1">
              <h1 className = "text-capitalize About" >Services</h1>
              <p className = "About-des">Dolore dolore laboris mollit ea et nisi irure consectetur minim consectetur ut id do adipisicing esse aliqua laborum id aliqua labore laborum reprehenderit consectetur dolor consequat dolor consectetur deserunt sunt velit in dolor non minim pariatur dolore amet labore irure sit commodo nostrud consequat aute dolor velit duis nisi ut velit dolor adipisicing ex eiusmod aute ut occaecat aliqua laborum esse ut id nisi velit veniam pariatur elit voluptate in consectetur sit id dolor ut tempor nulla ex pariatur mollit dolore officia excepteur ea consectetur eiusmod ut exercitation commodo eu nisi incididunt laborum ea ut laboris sit nulla qui eu dolor dolor officia id quis excepteur duis ad anim officia veniam do anim veniam ex excepteur ea aute excepteur aute amet culpa officia aliquip dolore adipisicing dolor cillum qui est dolore cupidatat aute laboris adipisicing consectetur ut aute nulla
              </p>
         </div>
         <div className = "col-md-6 mdf2">
              <img className = "img-hm" src={services}/>
          </div>
       </div>
  </div>
 	</>
 	
 	);

}

export default Service;