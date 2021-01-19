import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";
import Bear from "../assets/images/logo.gif";
import BearTwo from "../assets/images/logo2.gif";
import BearThree from "../assets/images/logo3.gif";
import BearFour from "../assets/images/logo4.gif";
import BearFive from "../assets/images/logo5.gif";
import "../pages/css/General.css";

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


componentDidMount() {
    document.title = "weatherly";
}

render() {
    console.log("gen", this.props.userName)
    if (this.props.userName) {
        return (
            <>
            <div className = "pageContainer">
                <h2>Welcome Back</h2>
                <h2> {this.props.userName}</h2>
                <img src={BearFive} id= "General-bear-gif"></img>
            </div>
            </>
        )
    }
    return (
        <>
        <div className = "pageContainer">
            <img src={BearFive} id= "General-bear-gif"></img>
        </div>
        </>
    )
}

}
export default Loading;