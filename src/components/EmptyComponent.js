import React, { Component, useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import '../App.css';


 function EmptyComponent({wording}) { 
  

  return (
    <div className="empty-component">
      <div className="container">
          <img src="/sad-face-2.png" className="sad-face" />
          <h2>Owh Snap!</h2>
          <p>{wording}</p>
      </div>
    </div>
 
  );

}


export default EmptyComponent;
