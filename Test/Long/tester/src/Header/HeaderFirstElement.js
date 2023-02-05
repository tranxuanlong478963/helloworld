import React from "react";
import '../Scss/HeaderScss/Header.scss';
import '../Scss/Media.scss';
import '../Scss/HeaderScss/HoverHeader.scss';
import '../Scss/Media.scss';
class HeaderFirstElement extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="firstLogoContainer" id="firstLogoContainer">
            <img className="topLogo" src={require('../img/TopLogo/Logo.png')} alt="icon"/>
            <p className="headerMiddleText">TIMES CORNER</p>
            <p className="headerBottomText"> SORRENTO BOUTIQUE HOTEL</p>
            {/* <FontAwesomeIcon icon="fa-light fa-chevron-down"/> */}
            {/* <img style={{width:'5px',height:'5px'}} src={require('../img/TopLogo/Vector.png')}></img> */}
        </div>
    }
}

export default HeaderFirstElement;