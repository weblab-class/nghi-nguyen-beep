import React, {Component} from "react";

class ClosetSubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


componentDidMount() {
    document.title = "ClosetSubmitButton";
}

render() {
    console.log("submit button");
   
        return (
        <>
        <button type="submit">Submit</button>
        </>
        )
    }

}
export default ClosetSubmitButton;