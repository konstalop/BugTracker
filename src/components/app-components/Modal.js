import React from "react";


function Modal(props)  {
    return (props.trigger) ? (
        <div className="modal">
            <div className="modal-inner">
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Modal