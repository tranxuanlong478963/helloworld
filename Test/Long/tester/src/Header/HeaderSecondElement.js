import React from "react";
import '../Scss/HeaderScss/Header.scss';
import '../Scss/Media.scss';
import '../Scss/HeaderScss/HoverHeader.scss';


class HeaderSecondElement extends React.Component {
    constructor() {
        super();
        this.state={
            lCount:0
        }
    }
    langDataDrop = (drop, lCount) => {
        document.getElementById("langItem1").style.visibility = drop;
        document.getElementById("langItem2").style.visibility = drop;
        this.setState({ lCount });
    }
    onDropdownLang = (e) => {
        if (this.state.lCount === 0) {
            this.langDataDrop("visible", 1)
        } else {
            this.langDataDrop("hidden", 0)
        }
    }
    onChangeLanguage = (e) => { 
        let clickItem = e.target;
        let changeItem = document.getElementById("mainLangItem");
        let langImage = document.getElementById("langImage");
        let clickText =  clickItem.textContent;
        let changeText = changeItem.textContent;
        clickItem.textContent = changeText;
        changeItem.textContent = clickText ;
        changeItem.appendChild(langImage);
        this.langDataDrop("hidden", 0)

    }
    render() {
        return <div className="secondLogoContainer">
            <div className="languageSelection">
                {/* <select className="selectTag"> */}
                {/* <option>Tiếng Việt */}
                {/* <img style={{ width: '5px', height: '5px' }} src={require('../img/TopLogo/Vector.png')}></img>&emsp; */}
                {/* </option> */}
                {/* <option>Tiếng Anh</option> */}
                {/* <option>Tiếng Mỹ</option> */}
                {/* </select>  */}
                <div id="mainLangItem" className="selectTag" onClick={this.onDropdownLang}>
                    Tiếng Việt
                    <img id="langImage" className="langIcon" src={require('../img/TopLogo/Vector.png')} alt="icon"></img>
                </div>
                <div onClick={this.onChangeLanguage} id="langItem1" className="selectTag languageVisibility">Tiếng Mỹ</div>
                <div onClick={this.onChangeLanguage} id="langItem2" className="selectTag languageVisibility">Tiếng Anh</div>
            </div>
            <button className="bookingButton">ĐẶT PHÒNG</button>
        </div>
    }
}

export default HeaderSecondElement;