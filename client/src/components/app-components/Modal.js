import React from "react";

/**
 * pop up modal
 * @param {*} props trigger
 * @returns modal
 */

const Modal = (props) =>  {
    return (props.trigger) ? (
        <div className="modal">
            <div className="modal-inner">           
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Modal