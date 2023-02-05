import React from "react";
import { Fragment } from "react";
import MiddleText from './MiddleText';
import ButtonSideBar from './ButtonSideBar';
import ChatElement from './ChatElement';

class MainBackground extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <Fragment>
            <MiddleText />
            <ButtonSideBar />
            <ChatElement />
        </Fragment>
    }
}
export default MainBackground;