import React from "react";
import { Props } from "../types/ErrorPropsType";

import "./ErrorScreen.css";

export default function ErrorScreen(props: Props) {
  return (
    <div onClick={props.resetError} className={`backdrop ${ props.errorState.code ? "backdrop-show" : ""}`}>
      <div className="modal modal-show">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Error</h4>
            <i onClick={props.resetError} className="close" />
          </div>
          <div className="modal-body">
            <p>{props.errorState.reason ? props.errorState.reason : props.errorState.message }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
