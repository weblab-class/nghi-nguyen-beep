import React, {Component} from "react";
import "./Avatar.css";
import Bear from "../../public/Bear.png";
import Cat from "../assets/images/avatars/Cat.png";
class ChooseAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


componentDidMount() {
    document.title = "Avatar";
}

render() {
    return (
        <>
        
          <div className = "Profile-avatar">
             {/* <img src = {Bear} alt="bear" id = "bear"/> */}
             {/* <img src = {Cat} alt="cat" id = "cat"/> */}
             <input type="image" src={Cat} name="cat" id="cat" />
             <input type="image" src={Bear} name="bear" id="bear" />
        </div>
    </>
      
        )
    }

    }
export default ChooseAvatar;