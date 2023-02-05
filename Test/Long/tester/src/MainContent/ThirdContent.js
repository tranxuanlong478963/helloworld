import React, { Fragment } from "react";
import '../Scss/FirstContent/ThirdContentMedia.scss';
class ThirdContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <Fragment>
            <div className="thirdMainContainer">
                <div className="thirdMainItemText1">ẨM THỰC</div>
                <div className="thirdMainItemText2">Sỡ hữu không gian ấm cúng, thiết kế theo phong cách hiện đại,
                    đồ nội thất trang nhã và khu ban công rộng rãi.</div>
                <div className="thirdMainItemImageDiv">
                    <div className="thirdMainItemImage1"></div>
                    <div className="thirdMainItemImage2"></div>
                </div>
            </div>
            {/* <div className="thirdMainItemImageDiv"> */}
                {/* <div className="thirdMainItemImage1"> */}
                    {/* <img  style={{width:'100%', height:"100%"}} src={require('../img/Image4/Ẩm\ thực\ section\ pic\ 1.png')} alt="item"></img> */}
                    {/* </div> */}
                {/* <div className="thirdMainItemImage2"> */}
                    {/* <img style={{width:'100%', height:"100%"}} src={require('../img/Image4/Ẩm\ thực\ section\ pic\ 2.png')} alt="item"></img> */}
                    {/* </div> */}
                    {/* <div className="thirdMainItemImage1"></div>
                    <div className="thirdMainItemImage2"></div> */}
        </Fragment>
    }
}

export default ThirdContent;