import React from "react";
import { Props } from "../types/ErrorPropsType";

import "./ErrorScreen.css";

export default function ErrorScreen(props: Props) {
  return (
    <div 
      onClick={props.errorState.type === 'error' ? props.resetError : props.closeModal} 
      className={`backdrop ${ props.errorState.code ? "backdrop-show" : ""}`}>
      <div className={`modal modal-show modal-${props.errorState.type}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h4>{props.errorState.type}</h4>
            <i 
              onClick={props.errorState.type === 'error' ? props.resetError : props.closeModal} 
              className="close" 
            />
          </div>
          <div className="modal-body">
            <p>{props.errorState.reason ? props.errorState.reason : props.errorState.message }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
