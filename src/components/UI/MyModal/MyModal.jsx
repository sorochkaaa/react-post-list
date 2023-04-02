import React from "react";
import classes from "./MyModal.module.css";

function MyModal({children, modal, setModal}) {
    const rootClasses = [classes.MyModal];
    if (modal) {
        rootClasses.push(classes.active);
    }
    return (
        <div 
            onClick={() => setModal(false)}
            className={rootClasses.join(' ')}
        >
            <div 
                className={classes.MyModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default MyModal;