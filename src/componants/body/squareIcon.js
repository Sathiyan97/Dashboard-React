import React, {Component} from 'react';
import Icon from "../sidebar/icon"
import "../styles/body/body.css"
import "../styles/sidebar/sidebar.css"


class SquareIcon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="flex row flex-colgap-20 vertical-center">
                    <div className="box-icon ">
                        <Icon url={this.props.url} imgName={this.props.content} size="img-25"/>
                    </div>
                    <div>
                        <span>{this.props.content}</span> <br/>
                        <span className="font-15">{this.props.subContent}</span>
                    </div>
                </div>

        );
    }
}

export default SquareIcon;