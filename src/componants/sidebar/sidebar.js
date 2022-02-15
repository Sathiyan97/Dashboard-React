import React, {Component} from 'react';
import "../styles/sidebar/sidebar.css"
import Icon from "./icon";
import AppleLogo from "../images/apple-logo.png"
import Home from "../images/home.png"
import Contact from "../images/contact.png"
import Notification from "../images/notification.png"
import Setting from "../images/setting.png"
import Newsfeed from "../images/newsfeed.png"
import Star from "../images/star.png"
import Time from "../images/time.png"
import Dataflow from "../images/dataflow.png"
import Addon from "../images/add-more.png"

class Sidebar extends Component {

    render() {
        return (
            <div className="flex col height-92vh horizontal-center vertical-center flex-rowgap">
                <Icon url={AppleLogo} alt="Apple Icon" size="img-60"/>
                <Icon url={Home} imgName="Home" size="img-25"/>
                <Icon url={Contact} imgName="Contact" size="img-25"/>
                <Icon url={Notification} imgName="Notification" size="img-25"/>
                <Icon url={Setting} imgName="Setting" size="img-25"/>
                <Icon url={Newsfeed} imgName="Newsfeed" size="img-25"/>
                <Icon url={Star} imgName="Star" size="img-25"/>
                <Icon url={Time} imgName="Time" size="img-25"/>
                <Icon url={Dataflow} imgName="Dataflow" size="img-25"/>
                <div className="">
                    <Icon url={Addon} imgName="Add On" size="img-50"/>
                </div>
            </div>
        );
    }
}

export default Sidebar;