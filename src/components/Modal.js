import React, { Component, useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import '../App.css';


 function Modal({wording, status, closeModal, onKeyUp}) { 
  

  return (
    <div className="modal">
      <div className="overlay-modal">
      </div>
      <div className="modal-content">
        <div className="header">
          <h2>{status}</h2>
          <img src="/close-modal.png" className="close-modal" alt="close-modal" onClick={closeModal}/>
        </div>
        <div className="modal-body">
          {wording}
          <div>
            Please name your new Pokemon!
            <input type="text" id="pokemon-name" onKeyUp={onKeyUp}/>
          </div>
        </div>
      </div>
    </div>
 
  );

}


export default Modal;
