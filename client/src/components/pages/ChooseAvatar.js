import React, {Component} from "react";
import "./Avatar.css";
import Bear from "../../public/Bear.png";
import Cat from "../assets/images/avatars/Cat.png";
import { Router, Redirect, redirectTo, navigate } from "@reach/router";
import AvatarSubmitButton from "../modules/AvatarSubmitButton.js";
class ChooseAvatar extends Component {
    constructor(props) {
        super(props);
        this.avatarPressed = this.avatarPressed.bind();
        this.nextPressed = this.nextPressed.bind();
        this.state = {
            avatarSelected: null,
            nextSelected: null
        };
    }


componentDidMount() {
    document.title = "Avatar";
}

avatarPressed = (avatar) => {
    this.setState({avatarSelected: avatar}, () => console.log(avatar));
}

nextPressed = () => {
    this.setState({nextSelected: true}, () => console.log(this.state.nextSelected));
}

render() {
    console.log("avatar", this.props);

   
        if (this.state.avatarSelected) { // next button only appears after avatar is selected
            return (
            <>
            <div className = "Profile-avatar">
            <h2>{this.state.avatarSelected} selected</h2>
                {/* <input type="image" src={Cat} name="cat" id="cat" onClick={() => this.avatarPressed("cat")} /> */}
                <input type="image" src={Bear} name="bear" id="bear" onClick={() => this.avatarPressed("bear")}/>
            </div>
                <div className= "Profile-next">
                    <AvatarSubmitButton avatar= {this.state}/>
                </div>
            </>
            )
        }
        else {
        return (
            <>
            <div className = "Profile-avatar">
                {/* <input type="image" src={Cat} name="cat" id="cat" onClick={() => this.avatarPressed("cat")} /> */}
                <h2>Select an avatar</h2>
                <input type="image" src={Bear} name="bear" id="bear" onClick={() => this.avatarPressed("bear")}/>   
            </div> 
        </>
            )}
        }

}
export default ChooseAvatar;