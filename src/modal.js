import React from "react";

function Modal(props) {
    console.log(props);
    const cancel = () => {
        props.cancel()
    }
    return (props.isVisabled && <div>
        <button onClick={cancel}>关闭</button>
        111
    </div>)
}

export default Modal