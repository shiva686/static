import React from 'react';
import bgb from'./photos/bgb.jpg'

const Home = () => {

 return(
 	 
 	 <div className="container-fluid">
 	   <div className = "row md">
 	     <div className = "col-md-6 mdf1">
          <h1 className = "Hg" >Grow your business with</h1>
          <p className = "sub-Hg">Website</p>
          </div>
          <div className = "col-md-6 mdf2">
          <img className = "img-hm" src={bgb}/>
          </div>
        </div>
 	 </div>


 	);
}

export default Home;