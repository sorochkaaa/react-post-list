import React from "react";
import classes from './MySelect.module.css'

function MySelect({options, defaultValue, value, onChange}) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)} 
            className={classes.MySelect}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    )
}

export default MySelect;