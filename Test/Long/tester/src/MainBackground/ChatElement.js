import React from "react";


class ChatElement extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className="chatElement">
                <img className="iconChatElement" src={require('../img/Image1/Hover.png')}></img>
        </div>
    }
}
export default ChatElement;