import React, { Component } from 'react';

export default class ExtendedInput extends Component {
    constructor(props) {
        super(props);

        let thisFieldValue = this.props.inputValue;
        if (thisFieldValue === undefined) {
            thisFieldValue = "";
        }

        this.state = {
            tempValue: thisFieldValue
        };

        this.updateValue = this.updateValue.bind(this);
        this.saveValue = this.saveValue.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.inputValue !== prevProps.inputValue && this.state.tempValue !== this.props.inputValue) {
            this.setState({ tempValue: this.props.inputValue });
        }
    }

    updateValue(event) {
        this.setState({ tempValue: event.target.value });
        event.preventDefault();
    }

    saveValue() {
        if (this.state.tempValue !== this.props.inputValue) {
            this.props.saveValue(this.state.tempValue);
        }
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.inputName}>{this.props.title}</label>
                <input
                    type="text"
                    name={this.props.inputName}
                    value={this.state.tempValue}
                    onChange={this.updateValue}
                    onBlur={this.saveValue} />
            </div>
        );
    };
}