import React from "react";
import Navigation from "./Navigation.css";

function Navigation() {
    return(
        <div className="nav">
            <Link to="/"> HOME </Link>
            {/* <Link to="/about"> About </Link> */}
            <Link to={{pathname: '/about', state:{ fromNavigation: true}}}> About </Link>
        </div>
    );
}

export default Navigation;