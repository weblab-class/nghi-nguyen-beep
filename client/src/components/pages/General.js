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
            newUser: true
        };
    }


    componentDidMount() {
        // document.title = "weatherly";
        get("/api/user")
        .then((user) => {
            this.setState({newUser: user.newuser}, () => console.log("general", user, typeof(user.newuser))
            )
        })
        .catch((err) => console.log(err));
    }

    render() {
        console.log("gen", this.state);
        // if (this.state.newUser) {
            return (
                <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

                {this.props.userName ? (
                    
                    <div className = "General-main">
                        <h2>Welcome</h2>
                        <h2> {this.props.userName}</h2>
                        <img src={waving} id= "General-bear-gif"></img>
                        <button type="submit" onClick= {() => navigate("/avatar")}>Click here to get started!</button>
                    </div>
                ) : (
                    <>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                    <div className = "General-main">
                        <img className="animate__animated animate__fadeIn" src={Title} id= "General-bear-gif"></img>
                    </div>
                    </> 
                )} 
                </>
            );
        // }

        // else {
        //     return (
        //         <>
        //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

        //         {this.props.userName ? (
                    
        //             <div className = "General-main">
        //                 <h2>Welcome</h2>
        //                 <h2> {this.props.userName}</h2>
        //                 <p>Press on the Profile link to get your outfit!</p>
        //                 <img src={waving} id= "General-bear-gif"></img>
        //             </div>
        //         ) : (
        //             <>
        //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        //             <div className = "General-main">
        //                 <img className="animate__animated animate__fadeIn" src={Title} id= "General-bear-gif"></img>
        //             </div>
        //             </> 
        //         )} 
        //         </>
        //     )

        // }

        
    }

}

export default General;