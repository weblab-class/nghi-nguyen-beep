import React, {Component} from "react";
import { get, post } from "../../utilities.js";
import { socket } from "../../client-socket.js";
import { Link, Router, Redirect, redirectTo, navigate } from "@reach/router";

class AvatarSubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {avatar: null};
    }


componentDidMount() {
    document.title = "weatherly";
}


saveAvatar = (body) => {
    console.log("body", body, typeof(body));
    post("/api/avatar/", body).then(navigate("/survey"));
  };

render() {
    
        console.log("avatar", this.props)
        return (
        <>
        <button type="submit" onClick= {() => this.saveAvatar(this.props)}>Submit</button>
        </>
        )
    }

}
export default AvatarSubmitButton;