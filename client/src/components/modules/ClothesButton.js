import React, {Component} from "react";
import "../modules/ClothesButton.css";

class ClothesButton extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind();
        this.state = {item: null, specific: null, selected: false, frequency: "50"};
    }

componentDidMount() {
    document.title = "weatherly";
}

handleChange = (type, clothing) => {
    
    if (this.state.selected) { //if already selected, unselect it
        this.setState({item: type, specific: clothing,  selected: false}, () => 
        {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        });
    }
    else {
        this.setState({item: type, specific: clothing,  selected: true}, () => 
        {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }}
        );
        }
}

sliderChange = (e) => {
    this.setState({frequency: e.target.value}, () => 
    {
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    });
}

render() {   
    return (
        <>
            <div className= "buttonLabel">
            <input type= "checkbox" id = {"cb" + String(this.props.clothing)} onClick= {() => this.handleChange(this.props.type, this.props.name)}/>
            <label htmlFor= {"cb" + String(this.props.clothing)}> {this.props.clothing} </label>
            {this.state.selected &&
                <>
                    <input type="range" className="slider" value={this.state.frequency} min="1" max="100" onChange={(e) => this.sliderChange(e)}/>
                    <p className = "outNum">{this.state.frequency}</p>
                </>
            }
            </div>
            {/* https://stackoverflow.com/questions/30663562/use-images-like-checkboxes/30663705 */}
         </>
        )
    }

}

export default ClothesButton;