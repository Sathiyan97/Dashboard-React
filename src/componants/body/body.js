import React, {Component} from 'react';
import "../styles/body/body.css"
import "../styles/sidebar/sidebar.css"
import Icon from "../sidebar/icon"
import SquareIcon from "./squareIcon";
import Virat from "../images/virat.jpeg"
import Sms from "../images/sms.png"
import Earn from "../images/earning.png"
import VisaCard from "../images/visa-card.png"
import Barchart from "../images/bar-chart.png"
import Calander from "../images/calender.png"
import RightArrow from "../images/right-arrow.png"
import Setting from "../images/setting.png"
import Goal from "../images/down-arrow.png"
import Time from "../images/time.png"
import Addon from "../images/add-more.png"
import Dataflow from "../images/dataflow.png"
import Attach from "../images/attach.png"

class Body extends Component {
    render() {
        return (<div className=" flex col ">
                <header className="margin-20">
                    <div className="flex row space-between">
                        <div className="flex horizontal-center vertical-center flex-colgap-20">
                            <Icon url={Virat} imgName="Virat" size="img-50"/>
                            <span className="font-size">Good Evening Virat!</span>
                        </div>
                        <div className="flex horizontal-center vertical-center flex-colgap-20">
                            <select id="acc">
                                <option value="volvo">Choose Account</option>
                                <option value="saab">asdsa</option>
                                <option value="vw">wdwd</option>
                                <option value="audi" selected>adas</option>
                            </select>
                            <Icon url={Sms} imgName="sms" size="img-50"/>
                        </div>
                    </div>
                </header>
                <div className="margin-20 flex row horizontal-center vertical-center space-between">
                    <div className="flex col flex-rowgap">
                        <SquareIcon url={Earn} content="Total earning" subContent="$12,594.10"/>
                        <SquareIcon url={Earn} content="Goal for this month" subContent="$12,594.10"/>
                    </div>
                    <div>
                        <Icon url={VisaCard} imgName="VisaCard" size="img-220"/>
                    </div>
                    <div className="flex col flex-rowgap">
                        <SquareIcon url={Earn} content="Total Spending" subContent="$4,875.10"/>
                        <SquareIcon url={Earn} content="Spending Goal" subContent="$6,126.10"/>
                    </div>
                </div>
                <div>
                    <div className="vertical-center flex row flex-colgap-20  border-top-bottom  ">
                        <span className="left-20">ACTIVITY SUMMARY</span>
                        <span className="gray-color">PENDING SUMMARY</span>
                        <span className="gray-color">INCOME SUMMARY</span>
                    </div>
                    <div className="flex row ">
                        <div className="width-26">
                            <div className="margin-20 flex row space-between vertical-center">
                                <span>Activity Graph</span>
                                <span className="font-15">$186k</span>
                            </div>
                            <div className="flex horizontal-center">
                                <Icon url={Barchart} imgName="Barchart" size="img-180"/>
                            </div>
                            <div className="margin-20 flex col flex-rowgap-20 right-20">
                                <div className="flex row vertical-center space-between">
                                    <SquareIcon url={Calander} content="Monthly Plan"/>
                                    <Icon url={RightArrow} imgName="RightArrow" size="img-25"/>
                                </div>
                                <div className="flex row vertical-center space-between">
                                    <SquareIcon url={Setting} content="Setting"/>
                                    <Icon url={RightArrow} imgName="RightArrow" size="img-25"/>
                                </div>
                                <div className="flex row vertical-center space-between">
                                    <SquareIcon url={Goal} content="Goal"/>
                                    <Icon url={RightArrow} imgName="RightArrow" size="img-25"/>
                                </div>
                                <div className="flex row vertical-center space-between">
                                    <SquareIcon url={Time} content="Shopping"/>
                                    <Icon url={RightArrow} imgName="RightArrow" size="img-25"/>
                                </div>
                            </div>
                        </div>
                        <div className="margin-20 width-auto flex col">
                            <div className="flex row  vertical-center flex-colgap-10 ">
                                <span>History</span>
                                <span>Upcoming</span>
                                <div className="flex row vertical-center horizontal-center space-evenly left-40">
                                    <input type="Date"/>
                                    <SquareIcon url={Setting}/>
                                    <SquareIcon url={Addon}/>
                                </div>
                            </div>
                            <div className="top flex col">
                                <legend>13 sep 2014</legend>
                                <div className="flex row vertical-center space-between top">
                                    <Icon url={Dataflow} imgName="RightArrow" size="img-25"/>
                                    <div className="flex col">
                                        <span>Office Supplies</span> <br/>
                                        <span>10 sep 2014 at 3.30pm</span>
                                    </div>
                                    <div className="flex row vertical-center flex-colgap-20 ">
                                        <Icon url={Addon} imgName="RightArrow" size="img-15"/>
                                        <span>Supplies</span>
                                    </div>
                                    <SquareIcon url={Attach}/>
                                    <span>-$10,100.00</span>
                                </div>
                            </div>
                            <div className="top flex col">
                                <legend>10 sep 2020</legend>
                                <div className="flex row vertical-center space-between top">
                                    <Icon url={Dataflow} imgName="RightArrow" size="img-25"/>
                                    <div className="flex col">
                                        <span>Office Supplies</span> <br/>
                                        <span>10 sep 2014 at 3.30pm</span>
                                    </div>
                                    <div className="flex row vertical-center flex-colgap-20 ">
                                        <Icon url={Addon} imgName="RightArrow" size="img-15"/>
                                        <span>Supplies</span>
                                    </div>
                                    <SquareIcon url={Attach}/>
                                    <span>-$10,100.00</span>
                                </div>
                                <div className="flex row vertical-center space-between top">
                                    <Icon url={Dataflow} imgName="RightArrow" size="img-25"/>
                                    <div className="flex col">
                                        <span>Office Supplies</span> <br/>
                                        <span>10 sep 2014 at 3.30pm</span>
                                    </div>
                                    <div className="flex row vertical-center flex-colgap-20 ">
                                        <Icon url={Addon} imgName="RightArrow" size="img-15"/>
                                        <span>Supplies</span>
                                    </div>
                                    <SquareIcon url={Attach}/>
                                    <span>-$10,100.00</span>
                                </div>
                                <div className="flex row vertical-center space-between top">
                                    <Icon url={Dataflow} imgName="RightArrow" size="img-25"/>
                                    <div className="flex col">
                                        <span>Office Supplies</span> <br/>
                                        <span>10 sep 2014 at 3.30pm</span>
                                    </div>
                                    <div className="flex row vertical-center flex-colgap-20 ">
                                        <Icon url={Addon} imgName="RightArrow" size="img-15"/>
                                        <span>Supplies</span>
                                    </div>
                                    <SquareIcon url={Attach}/>
                                    <span>-$10,100.00</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Body;