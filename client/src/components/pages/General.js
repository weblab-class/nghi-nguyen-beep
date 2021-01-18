import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";
import Bear from "../assets/images/logo.gif";
import BearTwo from "../assets/images/logo2.gif";
import BearThree from "../assets/images/logo3.gif";
import BearFour from "../assets/images/logo4.gif";
import BearFive from "../assets/images/logo5.gif";
import "../pages/css/General.css";

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
    return (
        <>
        <div className = "pageContainer">
            <img src={BearFive} id= "General-bear-gif"></img>
        </div>
        </>
    )
}

}
export default General;