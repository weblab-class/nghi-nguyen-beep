import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";
import aboutMe from "../assets/images/aboutMe.gif";
import "./css/About.css";
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
        <div className = "About-main">
        <img src={aboutMe} ></img>
         <h2>Nghi Nguyen</h2>
         <p>I like drawing and coding stuff like a BAAWS</p>
        </div>
        </>
    )
}

}
export default About;