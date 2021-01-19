import React, {Component} from "react";

class GeneralItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: null,
            lowTemp: null,
            curTemp: null
        };
    }


componentDidMount() {
    document.title = "general item";
    this.setState({curTemp: this.props.temp});
}

render() {
    return (
        <>
        </>
    )
}

}
export default GeneralItem;