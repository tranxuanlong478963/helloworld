import React, { Fragment } from "react";
import '../Scss/FirstContent/SecondContentMedia.scss';
import '../Scss/FirstContent/SecondContentTextMedia.scss';
class SecondContent extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [
                {
                    class1: "containerIconText1",
                    class2: "containerIconItem1",
                    class3: "iconItemText1",
                    text1: "60m",
                    text2: "2"
                },
                {
                    class1: "containerIconText2 ",
                    class2: "containerIconItem2",
                    class3: "iconItemText2",
                    class4: "addPosition1",
                    text1: "người",
                    text2: "2"
                },
                {
                    class1: "containerIconText3 ",
                    class2: "containerIconItem3",
                    class3: "iconItemText3",
                    class4: "addPosition2",
                    text1: "Hướng biển",
                    text2: ""
                }
            ]
        }
    }

    render() {
        let iconItem = this.state.item.map(item => {
            if (item.text1 === "60m") {
                return <div className={item.class1}>
                    <div className={item.class2}></div>
                    <div className={item.class3}>{item.text1}<sup>{item.text2}</sup></div>
                </div>
            } else if (item.text2 === "2" && item.text1 !== "60m") {
                return <div className={item.class1 + item.class4}>
                    <div className={item.class2}></div>
                    <div className={item.class3}>{item.text2}&nbsp;{item.text1}</div>
                </div>
            } else {
                return <div className={item.class1 + item.class4}>
                    <div className={item.class2}></div>
                    <div className={item.class3}>{item.text1}</div>
                </div>
            }
        })
        return <Fragment>
            <div className="textSC1">PHÒNG NGHỈ</div>
            <div className="textSC2">Những căn phòng tại Times Corner Sorrento sẽ mang
                lại cho bạn những trải nghiệm khó quên</div>
            <div className="imageSC1"></div>
            <div className="imageSC2"></div>
            <div className="textImageSCDiv1">Single Sea View
                <div className="containerIcons">
                    {iconItem}
                    <div className="SCButton1">ĐẶT PHÒNG</div>
                </div>
            </div>
            <div className="textImageSCDiv2">Single Sea View
                <div className="containerIcons">
                    {iconItem}
                    {/* <button className="SCButton1">ĐẶT PHÒNG</button> */}
                </div>
            </div>
        </Fragment>
    }
}

export default SecondContent;