import React, {Component} from 'react';
import "../styles/body/body.css"
import "../styles/sidebar/sidebar.css"
import "../styles/rightside/rightside.css"
import CircleIcon from "./circleIcon";
import Icon from "../sidebar/icon";
import Noti from "../images/notification copy.png"
import Serach from "../images/search.png"
import Upload from "../images/upload.png"
import Download from "../images/download.png"
import Bitcoin from "../images/bitcoin.png"
import Graph from "../images/graph.png"
import Dataflow from "../images/dataflow.png";


class Rightside extends Component {
    render() {
        return (
            <div className="margin-20 flex col">
                <div className="flex row space-between">
                    <div>
                        <span className="font-15">Orizon Crypto</span> <br/>
                        <span className="gray-color">Increase your profit</span>
                    </div>
                    <div className="flex row flex-colgap-20">
                        <CircleIcon url={Serach} imgName="Search" size="img-25" color="white"/>
                        <CircleIcon url={Noti} imgName="Notification" size="img-25" color="white"/>
                    </div>
                </div>
                <div className="blue-background margin-20 white-font ">
                    <div className="flex col margin-20">
                        <span>My Portfolio</span>
                        <span className="font-15">$34.010.00</span>
                    </div>
                </div>
                <div className="flex row horizontal-center flex-colgap-20 minus-margin">
                    <button className="button-size">
                        <div className="flex row horizontal-center vertical-center space-evenly">
                            <Icon url={Upload} alt="Upload" size="img-25"/>
                            <span>Deposit</span>
                        </div>
                    </button>
                    <button className="button-size">
                        <div className="flex row horizontal-center vertical-center space-evenly">
                            <Icon url={Download} imgName="Upload" size="img-25"/>
                            <span>Withdraw</span>
                        </div>
                    </button>
                </div>
                <div className="margin-20">
                    <div className="flex row space-between">
                        <span className="bold">Favorites</span>
                        <span className="blue-text bold">See All</span>
                    </div>
                    <div className="top flex row space-between">
                        <div className="white-back flex col vertical-center space-evenly">
                            <div className="flex row vertical-center flex-colgap-20 ">
                                <CircleIcon url={Bitcoin} imgName="Search" size="img-25" color="gray"/>
                                <div className="flex col">
                                    <span>BTC</span>
                                    <span>Bitcoin</span>
                                </div>
                            </div>
                            <Icon url={Graph} size="img-100"/>
                            <div className="flex row space-between ">
                                <font size="1">$20,788</font>
                                <font size="1">+2.55%</font>
                            </div>
                        </div>
                        <div className="white-back flex col vertical-center space-evenly">
                            <div className="flex row vertical-center flex-colgap-20 ">
                                <CircleIcon url={Bitcoin} imgName="Search" size="img-25" color="gray"/>
                                <div className="flex col">
                                    <span>BTC</span>
                                    <span>Bitcoin</span>
                                </div>
                            </div>
                            <Icon url={Graph} size="img-100"/>
                            <div className="flex row space-evenly ">
                                <font size="1">$20,788</font>
                                <font size="1">+2.55%</font>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="top flex col">
                        <legend>13 sep 2014</legend>
                        <div className="flex row vertical-center space-between top">
                            <CircleIcon url={Bitcoin} imgName="Search" size="img-25" color="gray"/>
                            <div className="flex col">
                                <span>Binance</span> <br/>
                                <font size={2}>BNB</font>
                            </div>
                            <Icon url={Graph} imgName="Upload" size="img-50-30"/>
                            <span >-$10,100.00</span>
                        </div><div className="flex row vertical-center space-between top">
                            <CircleIcon url={Bitcoin} imgName="Search" size="img-25" color="gray"/>
                            <div className="flex col">
                                <span>Binance</span> <br/>
                                <font size={2}>BNB</font>
                            </div>
                            <Icon url={Graph} imgName="Upload" size="img-50-30"/>
                            <span >-$10,100.00</span>
                        </div><div className="flex row vertical-center space-between top">
                            <CircleIcon url={Bitcoin} imgName="Search" size="img-25" color="gray"/>
                            <div className="flex col">
                                <span>Binance</span> <br/>
                                <font size={2}>BNB</font>
                            </div>
                            <Icon url={Graph} imgName="Upload" size="img-50-30"/>
                            <span >-$10,100.00</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rightside;