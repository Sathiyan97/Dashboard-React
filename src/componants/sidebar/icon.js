import React, {Component} from 'react';
import "../styles/sidebar/icon.css"

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.url} alt={this.props.imgName} className={this.props.size}/>
            </div>
        );
    }
}

export default Icon;