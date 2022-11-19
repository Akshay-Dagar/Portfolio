import React from "react";

const NavigationDots = ({active}) => {
    return (
        <div className="app__navigation">
            {["Home", "About", "Work", "Skills", "Experience", /*"Testimonials",*/ "Contact"].map(item => {
                return (
                    <a 
                        href={`#${item}`} 
                        key={item}
                        className="app__navigation-dot" 
                        style={active === item ? {backgroundColor: "#313bac"} : {}}
                    />
                )}
            )}
        </div>
    )
}

export default NavigationDots