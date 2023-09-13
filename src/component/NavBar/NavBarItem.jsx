import React from "react";
import './NavBarItem.css'
function NavBarItem(props) {
    return (
        <div className={props.isSelected ? 'navbar-item--selected navbar-item':'navbar-item'}>
            <div className="navbar-item-title">
                <img src={props.icon} alt='icon'/>
            </div>
            <div className="navbar-item-title">
                {props.text}
            </div>
        </div>
    );
}

export default NavBarItem;