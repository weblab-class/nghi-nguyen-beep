import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "157028916520-m6hggooip3h0h28bjr4itlv2rhdekkfe.apps.googleusercontent.com";

class SignedOut extends Component {
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
            <h1>signed out</h1>
        </div>
        </>
    )
}

}
export default SignedOut;