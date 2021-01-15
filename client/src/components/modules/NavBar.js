import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";

// This identifies your application to Google's authentication service
const GOOGLE_CLIENT_ID = "157028916520-m6hggooip3h0h28bjr4itlv2rhdekkfe.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: undefined,
 
    };
  }

  render() {
    return (
      <nav className="NavBar-container">
        <div className= "NavBar-allItems">
            <div className="NavBar-title">weatherly</div>
            <div className="NavBar-linkContainer u-inlineBlock">
            
            <Link to="/" className="NavBar-link">
                Home
            </Link>

            <Link to="/about/" className="NavBar-link">
                About the Creator
            </Link>

            {this.props.userId && (
                <Link to={`/profile/${this.props.userId}`} className="NavBar-link">
                Profile
                </Link>
            )}

            {this.props.userId ? (
                <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={this.props.handleLogout}
                onFailure={(err) => console.log(err)}
                className="NavBar-link NavBar-login"
                />
            ) : (
                <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={this.props.handleLogin}
                onFailure={(err) => console.log(err)}
                className="NavBar-link NavBar-login"
                />
            )}
            </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
