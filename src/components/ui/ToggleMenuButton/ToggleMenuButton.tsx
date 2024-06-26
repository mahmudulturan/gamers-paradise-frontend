"use state"
import React from 'react';
import './style.css';
const ToggleMenuButton = ({ handleMenuToggler, isMenuOpen }: { handleMenuToggler: VoidFunction, isMenuOpen: boolean }) => {
    return (
        <div>
            <input onChange={handleMenuToggler} checked={isMenuOpen} type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </div>
    );
};

export default ToggleMenuButton;