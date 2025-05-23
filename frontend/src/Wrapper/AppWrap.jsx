import React from "react";
import SocialMedia from "../Components/SocialMedia";
import NavigationDots from "../Components/NavigationDots";

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className="app__wrapper app__flex">
                <Component />
                <div className="copyright">
                    <p className="p-text">@2024 Akshay Dagar</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName}/>
        </div>
    )
}

export default AppWrap