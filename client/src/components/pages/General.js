import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";
import Bear from "../assets/images/logo.gif";
import BearTwo from "../assets/images/logo2.gif";
import BearThree from "../assets/images/logo3.gif";
import BearFour from "../assets/images/logo4.gif";
import BearFive from "../assets/images/logo5.gif";
import BearSix from "../assets/images/waving.gif";
import welcomeThree from "../assets/images/welcomeThree.gif";
import wavingTwo from "../assets/images/wavingTwo.gif";
import "../pages/css/General.css";
import { navigate } from "@reach/router";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "157028916520-m6hggooip3h0h28bjr4itlv2rhdekkfe.apps.googleusercontent.com";

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


componentDidMount() {
    document.title = "weatherly";
}

render() {
    if (this.props.userName) {
        return (
            <>
            <div className = "General-main">
                <h2>Welcome</h2>
                <h2> {this.props.userName}</h2>
                <img src={wavingTwo} id= "General-bear-gif"></img>
                <button type="submit" onClick= {() => navigate("/avatar")}>Click here to get started!</button>
            </div>
            </>
        )
    }
    return (
        <>
        <div className = "General-main">
            <img src={BearFive} id= "General-bear-gif"></img>
        </div>
        </>
    )
}

}
export default General;