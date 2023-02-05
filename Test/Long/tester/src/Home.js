import React from 'react';
import "./Scss/Main.scss";
import "./Scss/HeaderScss/Header.scss";
import "./Scss/Media.scss";
import Header from './Header/Header';
import MainBackground from './MainBackground/MainBackground';
import FirstContent from './MainContent/FirstContent';
import SecondContent from './MainContent/SecondContent';
import ThirdContent from './MainContent/ThirdContent';
import LastContent from './MainContent/LastContent';
class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className="bodyPage">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                {/* <div className="header">
                    <Header />
                </div> */}
                <div className="backgroundImage">
                    <MainBackground />
                </div>
            </div>
            <div className="mainBody">
                <FirstContent />
                <SecondContent/>
                <ThirdContent/>
                <LastContent/>
            </div>
        </div>
    }
}

export default Home;