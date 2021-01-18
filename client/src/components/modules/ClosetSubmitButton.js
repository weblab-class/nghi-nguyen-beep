import React, {Component} from "react";
import { get, post } from "../../utilities.js";
import { socket } from "../../client-socket.js";
import { Link, Router, Redirect, redirectTo, navigate } from "@reach/router";

class ClosetSubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


componentDidMount() {
    document.title = "ClosetSubmitButton";
}


saveCloset = (body) => {
    post("/api/closet", body).then(navigate("/profile/"+String(this.props.userId)));


  };

render() {
    
   
        return (
        <>
        <button type="submit" onClick= {() => this.saveCloset(this.props)} value={this.props.clothing} >Submit</button>
        </>
        )
    }

}
export default ClosetSubmitButton;