import React, {Component} from "react";

class GeneralItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: null,
            lowTemp: null,
        };
    }


componentDidMount() {
    document.title = "general item";
}

render() {
    return (
        <>
        </>
    )
}

}
export default GeneralItem;