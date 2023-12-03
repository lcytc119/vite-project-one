import React from "react";

export default class Checkbox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <label>{this.props.label}</label>
                <input type="checkbox" checked={this.props.isChecked} readOnly/>
            </>
        )
    }


}