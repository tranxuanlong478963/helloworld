import React from "react";
import { Fragment } from "react";
import '../Scss/HeaderScss/Header.scss';
import '../Scss/Media.scss';
import '../Scss/HeaderScss/HoverHeader.scss';
import HeaderFirstElement from "./HeaderFirstElement";
import HeaderSecondElement from "./HeaderSecondElement";
import HeaderThirdElement from "./HeaderThirdElement";
// import {FontAwesomeIcon} from 'font-awesome';
class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <Fragment>
            <div className="topHeader">
                <HeaderFirstElement/>
                <HeaderSecondElement/>
            </div>
            <hr className="hrTag"></hr>
            <HeaderThirdElement/>
            
        </Fragment>
    }
}

export default Header;