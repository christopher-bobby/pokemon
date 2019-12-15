import React, { Component } from 'react';


 function ModalGet({wording, status, closeModal, onKeyUp}) { 
  

  return (
    <div className="modal">
      <div className="overlay-modal" onClick={closeModal}>
      </div>
      <div className="modal-content">
        <div className="header">
          <h2>{status}</h2>
          <img src="/close-modal.png" className="close-modal" alt="close-modal" onClick={closeModal}/>
        </div>
        <div className="modal-body">
          {wording}
          {status === "Success" &&
           (<div>
            Please name your new Pokemon!
            <input type="text" id="pokemon-name" className="form-control focused" onKeyUp={onKeyUp} autoFocus />
          </div>)}
        </div>
      </div>
    </div>
 
  );

}


export default ModalGet;
