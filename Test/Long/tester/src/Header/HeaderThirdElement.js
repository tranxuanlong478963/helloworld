import React from "react";
import '../Scss/HeaderScss/Header.scss';
import '../Scss/Media.scss';
import '../Scss/HeaderScss/HoverHeader.scss';
import '../Scss/Media.scss';

class HeaderThirdElement extends React.Component {
    constructor() {
        super()
        this.state = {
            id: "",
            aId: "",
            naviData: [
                { id: "trangChu", aId: "trangChuA", name: "Trang chủ" },
                { id: "phongNghi", aId: "phongNghiA", name: "Phòng nghỉ" },
                { id: "amThuc", aId: "amThucA", name: "Ẩm thực" },
                { id: "dichVu", aId: "dichVuA", name: "Dịch vụ" },
                { id: "uuDai", aId: "uuDaiA", name: "Ưu đãi" },
                { id: "tour", aId: "tourA", name: "Tour" },
                { id: "phuQuoc", aId: "phuQuocChuA", name: "Khám phá Phú Quốc" },
                { id: "thuVien", aId: "thuVienA", name: "Thư viện" },
                { id: "lienHe", aId: "lienHeA", name: "Liên Hệ" }
            ]
        }
    }
    // I. Function
    onDeleteElement = () => {
        let list = document.getElementById(this.state.id);
        if (list !== null) {
            list.removeChild(list.firstElementChild);
            list.firstElementChild.style = 'bottom:0px;color:black';
        }
    }
    onAddElement = (currentElement, attributeValue, id, color) => {
        let newElement = document.createElement("div");
        newElement.classList.add("capNaviItem");
        newElement.style.width = `${attributeValue}`;
        currentElement.style = `position:relative; bottom:4.9px; color:${color}`;
        currentElement.parentNode.insertBefore(newElement, currentElement);
        this.setState({ id });
    }
    onDeleteCoElement = () => {
        if (this.state.aId !== "") {
            document.getElementById(this.state.aId).style.color = "black";
        }
    }
    onChangeColorWSmall = (currentElement, color) => {
        currentElement.style.color = color;
        this.setState({ aId: currentElement.id });
    }
    onGetTopUm = (e) => {
        //condition to keep element safe
        //value
        let currentElement = e.target;
        const navigationEColor = '#20b0a9';
        if (currentElement.parentNode.parentNode.offsetWidth >= 693) {
            let topUmLength = currentElement.offsetWidth;
            //     let attributeValue = `width:${topUmLength}px;
            // background-color:${navigationEColor};
            // height:5px;
            // border:none;
            // position:relative;
            // top:-10.9px;
            // z-index:200`;
            let id = currentElement.parentNode.id;
            //add Element
            if (this.state.id !== currentElement.parentNode.id) {
                if (this.state.aId !== currentElement.firstElementChild) {
                    this.onDeleteCoElement();
                    this.setState({ aId: "" });
                }
                //delete Element
                this.onDeleteElement();
                //add Element
                this.onAddElement(currentElement, topUmLength, id, navigationEColor);
            }
        } else {
            if (this.state.aId !== currentElement.firstElementChild) {
                //delete Css
                if (this.state.id !== currentElement.parentNode.id) {
                    this.onDeleteElement(); this.setState({ id: "" });
                };
                this.onDeleteCoElement();
                //add Css
                this.onChangeColorWSmall(currentElement, navigationEColor);
            }
        }
    }
    render() {
        let naviItem = this.state.naviData.map(item => {
            return <div className={item.id} id={item.id} onClick={this.onGetTopUm} key={item.id}><a id={item.aId}>{item.name}</a></div>
        })
        return <div className="navigationHeader">
            {naviItem}
        </div>
    }
}

export default HeaderThirdElement;