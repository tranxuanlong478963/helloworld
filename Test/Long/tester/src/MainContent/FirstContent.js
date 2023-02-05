import React, { Fragment } from "react";
import '../Scss/FirstContent/FirstContent.scss';
import '../Scss/FirstContent/FrstContentMedia.scss';
class FirstContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <Fragment>
            <div className="textFirstContent">Một tuyệt tác giữa biển trời
                và mây núi Times Corner Sorrento Boutique là sự kết hợp giữa nét
                đẹp Địa Trung Hải và thiên nhiên Phú Quốc</div>
            <div className="transparentImageFCDiv"></div>
            <div className="imgFC1"></div>
            <div className="imgFC2"></div>
        </Fragment>
    }
}

export default FirstContent;