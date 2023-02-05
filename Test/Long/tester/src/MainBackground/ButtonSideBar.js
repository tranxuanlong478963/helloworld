import React from "react";
import "../Scss/MainBackground/MediaBackground.scss";
import gift from '../img/Image1/gift.png';
import calendar from '../img/Image1/calendar.png';
//second third
class ButtonSideBar extends React.Component {
    constructor() {
        super();
        this.state = {
            iconList: [
                {
                    id: 1001,
                    idItem1: 10011,
                    idItem2: 10012,
                    name: "Ngày đến",
                    mainClassName: "containerOfTextAndIcon1",
                    divChildClass: "mainButtonSideBarDiv1",
                    imageClass: "mainIconImage1",
                    img:gift,
                },
                {
                    id: 1002,
                    idItem1: 10021,
                    idItem2: 10022,
                    name: "Ngày đi",
                    mainClassName: "containerOfTextAndIcon2",
                    divChildClass: "mainButtonSideBarDiv2",
                    imageClass: "mainIconImage2",
                    img:calendar,
                },
                {
                    id: 1003,
                    idItem1: 10031,
                    idItem2: 10032,
                    name: "Số người",
                    mainClassName: "containerOfTextAndIcon3",
                    divChildClass: "mainButtonSideBarDiv3",
                    imageClass: "mainIconImage3",
                    img:gift,
                },
                {
                    id: 1004,
                    idItem1: 10041,
                    idItem2: 10042,
                    name: "Mã ưu đãi",
                    mainClassName: "containerOfTextAndIcon4",
                    divChildClass: "mainButtonSideBarDiv4",
                    imageClass: "mainIconImage4",
                    img:calendar,
                }
            ]
        }
    }
    render() {
        let item = this.state.iconList.map(item => {
            return <div key={item.id} className={item.mainClassName}>
                <div key={item.idItem1} className={item.divChildClass}>{item.name}</div>
                <img key={item.idItem2} className={item.imageClass} src={item.img} alt="icon"></img>
            </div>
        });
        return <div className="buttonSideBar">
            {item}
            <button className="timPhongButton">TÌM PHÒNG</button>
            {/* <div className="chatIconDivBI"><img className="imageIconBI"></img></div> */}
        </div>
    }
}
export default ButtonSideBar;