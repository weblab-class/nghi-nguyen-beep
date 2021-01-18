import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";
import aboutMe from "../assets/images/aboutMe.gif";
//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "157028916520-m6hggooip3h0h28bjr4itlv2rhdekkfe.apps.googleusercontent.com";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


componentDidMount() {
    document.title = "About Me";
}

render() {
    return (
        <>
        <div className = "pageContainer">
        <img src={aboutMe} ></img>
         
        </div>
        </>
    )
}

}
export default About;