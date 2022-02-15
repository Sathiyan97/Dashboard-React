import React, {Component} from 'react';
import "../styles/rightside/circleIcon.css"
import "../styles/sidebar/icon.css"

class CircleIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.color}>
                <img src={this.props.url} alt={this.props.imgName}
                     className={this.props.size}/>
            </div>
        );
    }
}

export default CircleIcon;