import React, { Component } from 'react';

class Adoptionform extends Component {
    constructor(props) {
        super(props);
         this.state = {
            dogName : "",
            dogAge : '',
            dogBreed : "",
            dogTraining : false,
            dogColor : "",
        }
    }

     
    handleChange = (event) => {
        if(event.target.name === "dogName"){
            this.setState({dogName : event.target.value})
        } else if(event.target.name === "dogAge") {
            this.setState({dogAge : event.target.value})
        } else if(event.target.name === "dogBreed") {
            this.setState({dogBreed : event.target.value})
        } else if(event.target.name === "dogTraining") {
           this.setState({dogTraining : !this.state.dogTraining}) 
            console.log(event.target)
        } else if(event.target.name === "dogColor") {
            this.setState({dogColor : event.target.value})
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();  
         
        this.setState({
            dogName : "",
            dogAge : 0,
            dogBreed : "",
            dogTraining : false,
            dogColor : "",
        })
    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Dogs information</legend>

                        <div className="formGroup">
                            <label htmlFor="dogName">Dogs Name : </label>
                            <input type="text" name="dogName" id="dogName" 
                            value = {this.state.dogName} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="dogAge">Dogs Age : </label>
                            <input type="number" name="dogAge" id="dogAge" 
                            value = {this.state.dogAge} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="dogBreed">Dogs Breed : </label>
                            <input type="text" name="dogBreed" id="dogBreed" 
                            value = {this.state.dogBreed} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <p> potty trained:</p>
                            <label htmlFor="dogTraining">confrim: </label>
                            <input type="checkbox" id="dogTraining" name="dogTraining" 
                            checked = {this.state.dogTraining} onChange = {this.handleChange}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="dogColor">Dogs Color : </label>
                            <select id="dogColor" name = "dogColor" 
                            value = {this.state.dogColor} onChange = {this.handleChange}>
                                 <option value="white">white</option>
                                <option value="black">black</option>
                                <option value="brown">brown</option>
                                <option value="spotted">spotted</option>
                                <option value="other">other</option>
                            </select>
                        </div>

                        <button onClick = {this.handleSubmission}>Submit</button>

                    </fieldset>
                </form>
                <div>
                 {`dogName: ${this.state.dogName}
                 dogAge: ${this.state.dogAge}
                 dogBreed: ${this.state.dogBreed}
                 Trained:${this.state.dogTraining}
                 dog color:${this.state.dogColor}`}
             </div>
            </div>
        )
    }
}

export default Adoptionform;