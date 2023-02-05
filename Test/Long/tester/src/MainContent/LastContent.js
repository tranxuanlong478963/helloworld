import React, { Fragment } from "react";
import '../Scss/FirstContent/LastContentMedia.scss';
class LastContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <Fragment>
            <div className="lastContentMainDiv">
                <div className="lastContentText">Khám phá những ưu đãi và liên hệ với chúng tôi ngay
                    để không bỏ lỡ những cơ hội tuyệt vời.</div>
                <div className="lastContentImageMain">
                    <div className="lastContentImageItem1">
                        <div className="lastContentImageIcon1"></div>
                    </div>
                    <div className="lastContentImageItem2">
                        <div className="lastContentImageIcon2"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default LastContent;