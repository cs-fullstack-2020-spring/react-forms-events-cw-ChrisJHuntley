import React, { Component } from "react";
import AvailableDogs from './AvailableDogs'
import Adopptionform from './Adoptionform'
import Adoptionform from "./Adoptionform";
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>AppContainer rendered</h1>
                <AvailableDogs/>

                <Adoptionform/>
            </div>
        )
    }
}
export default AppContainer