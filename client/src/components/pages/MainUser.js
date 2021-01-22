import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";
// import Bear from "../assets/images/avatars/Bear.png";
import "../pages/css/General.css";

class MainUser extends Component {
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
            <h2>Hi {this.props.userName}!</h2>
            <img src={Bear} id= "General-bear-gif"></img>
        </div>
        </>
    )
}

}
export default MainUser;