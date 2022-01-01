import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
  <div class="row row-nav">
    <div class="col-sm-2">
     
    </div>
	  <div class="col-sm-8">

		  
		  
	<nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to="/homepage">Home</Link>&nbsp; &nbsp;
      </li>
   
		
		
           <li class="nav-item active">
           <Link to="/resume">Resume</Link> &nbsp;&nbsp;
      </li>
		
		       <li class="nav-item active">
           <Link to="/work">Work</Link> &nbsp;&nbsp;
      </li>
   
     
		
    </ul>
    
  </div>
</nav>
	  
    </div>
	 <div class="col-sm-2">
     </div>
  </div>
    )
  }
}

export default Nav// JavaScript Document