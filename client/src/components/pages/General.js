import React, {Component} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import NavBar from "../modules/NavBar.js";

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
          {this.props.userId} 
            <h1>hi everyone</h1>
        </div>
        </>
    )
}

}
export default General;