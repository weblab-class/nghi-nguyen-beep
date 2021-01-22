import React, {Component} from "react";
import Title from "../assets/images/weatherlyTitle.gif";
import waving from "../assets/images/waving.gif";
import "../pages/css/General.css";
import { navigate } from "@reach/router";

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
            {this.props.userName ? (
                <div className = "General-main">
                    <h2>Welcome</h2>
                    <h2> {this.props.userName}</h2>
                    <img src={waving} id= "General-bear-gif"></img>
                    <button type="submit" onClick= {() => navigate("/avatar")}>Click here to get started!</button>
                </div>
            ) : (
                <>
                <div className = "General-main">
                    <img src={Title} id= "General-bear-gif"></img>
                </div>
                </>
            )}
            </>
        )
        
    }

}

export default General;