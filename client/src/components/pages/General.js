import React, {Component} from "react";
import Title from "../assets/images/weatherlyTitle.gif";
import waving from "../assets/images/waving.gif";
import "../pages/css/General.css";
import { navigate } from "@reach/router";
import { get } from "../../utilities";

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: undefined
        };
    }


    componentDidMount() {
        // document.title = "weatherly";
        // get("/api/user").then((user) => this.setState({newUser: user.newuser}, console.log("gennn")));
        // get("/api/user")
        // .then((user) => {
        //     if (user.newuser) {
        //     console.log("here", user);
        //     }
        //     else{
        //         console.log("error");
        //     }
        // })
        // .catch((err) => console.log(err));
    }

    render() {
        // console.log("gen", this.props, this.props.newUser, this.state.newUser);
        // if (this.state.newUser) {

        if (this.props.userId) {
            return (
                <>
                
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>    
                    <div className = "General-main">
                        <h2>Welcome {this.props.userName}</h2>
                        {/* <h2> {this.props.userName}</h2> */}
                        <p>If you're new, click the button below to get started!<br></br> Else, click on profile tab to get your outfit for the day!</p>
                        <img src={waving} id= "General-bear-gif"></img>
                        <button type="submit" onClick= {() => navigate("/avatar")}>Click here to get started!</button>
                    </div>
              
      
                </>
            ); 
        }
        
        else {
            return (
                <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <div className = "General-main">
                    <img className="animate__animated animate__fadeIn" src={Title} id= "General-bear-gif"></img>
                </div>
                </> 
            )
        }
    }

}

export default General;