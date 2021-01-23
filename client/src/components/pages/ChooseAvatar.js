import React, {Component} from "react";
import "./Avatar.css";
import Avatar from "../modules/Avatar.js";
import AvatarSubmitButton from "../modules/AvatarSubmitButton.js";

class ChooseAvatar extends Component {
    constructor(props) {
        super(props);
        this.avatarPressed = this.avatarPressed.bind();
        this.nextPressed = this.nextPressed.bind();
        this.state = {
            avatarSelected: null,
            userId: this.props.userId,
        };
    }


componentDidMount() {
    document.title = "Avatar";
}

avatarPressed = (avatar) => {
    this.setState({avatarSelected: avatar}, () => console.log(avatar));
}

nextPressed = () => {
    this.setState({nextSelected: true});
}

render() {
    console.log("avatar", this.props);
            return (
            <>
            <div className = "Profile-avatar">

            {this.state.avatarSelected ? ( <h2> {this.state.avatarSelected} selected </h2>) : (<h2> Select an avatar </h2>)}
                
                <div id= "Bear" onClick={() => this.avatarPressed("Bear")}>
                    <Avatar avatar="Bear"/>
                </div>

                <div id= "GrayCat" onClick={() => this.avatarPressed("Gray Cat")}>
                    <Avatar avatar="GrayCat"/>
                </div>

                <div id= "CalicoCat" onClick={() => this.avatarPressed("Calico Cat")}>
                    <Avatar avatar="CalicoCat"/>
                </div>

            </div>
            
            {this.state.avatarSelected && (
                <div className= "Profile-next">
                <AvatarSubmitButton avatar= {this.state} userId = {this.props.userId}/>
            </div>
            )}
            
            </>
            )
        
    }

}
export default ChooseAvatar;