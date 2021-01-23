import React, {Component} from "react";
import GrayCat from "../../public/images/avatars/GrayCat.png";
import CalicoCat from "../../public/images/avatars/CalicoCat.png";
import Bear from "../../public/images/avatars/Bear.png";
import "./Avatar.css";

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

render(){

    return (
    <> 
    {!this.props.avatar && (<img src={Bear} id= "Avatar-Bear"/> )}  
    {this.props.avatar.split(" ").join("") === "CalicoCat" && (<img src={CalicoCat} id= "Avatar-CalicoCat"/> )}
    {this.props.avatar.split(" ").join("") === "GrayCat" && (<img src={GrayCat} id= "Avatar-GrayCat"/> )}
    {this.props.avatar.split(" ").join("") === "Bear" && (<img src={Bear} id= "Avatar-Bear"/> )}
    </>); 
    }
}

export default Avatar;