import React, { Component } from 'react';


function ModalError(closeModal) { 
  

  return (
    <div className="modal">
      <div className="overlay-modal" onClick={closeModal}>
      </div>
      <div className="modal-content">
        <div className="header">
          <h2>Owh Snap!</h2>
          <img src="/close-modal.png" className="close-modal" alt="close-modal" onClick={closeModal}/>
        </div>
        <div className="modal-body">
          There is an error on our side. We're on it!
        </div>
      </div>
    </div>
 
  );

}


export default ModalError;
