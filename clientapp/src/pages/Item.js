import React, { Component } from 'react';
import ExtendedInput from '../components/ExtendedInput'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "test value",
            extraFields: {
                "extra-name": "Something else",
                "extra-height": "Y so srs?"
            },
            extraFieldDetails: [
                { title: "Extra Name", inputName: "extra-name" },
                { title: "Extra Width", inputName: "extra-width" }
            ]
        };

        this.saveValue = this.saveValue.bind(this);
    }

    saveValue(fieldName, val, stateVal) {
        this.setState(stateVal);
        console.log("patch item " + this.props.match.params.id + ": set " + fieldName + " to " + val);
    }


    render() {
        let extraFields = [];

        for (let i = 0; i < this.state.extraFieldDetails.length; i++) {
            let thisFieldDetail = this.state.extraFieldDetails[i];

            extraFields.push(
                <ExtendedInput
                    key={"form-" + thisFieldDetail.inputName}
                    title={thisFieldDetail.title}
                    inputName={thisFieldDetail.inputName}
                    inputValue={this.state.extraFields[thisFieldDetail.inputName]}
                    saveValue={(val) => this.saveValue(thisFieldDetail.inputName, val, (s, p) => {
                        s.extraFields[p.inputName] = val;
                        return { extraFields: s.extraFields };
                    })} />);
        }

        return (
            <div className="App">
                <header className="App-header">
                    Item {this.props.match.params.id}
                    <br />
                    <ExtendedInput
                        inputName="test-name"
                        title="Test name"
                        inputValue={this.state.inputValue}
                        saveValue={(val) => this.saveValue("input-value", val, { inputValue: val })} />
                    {extraFields}
                </header>
            </div>
        );
    }
}

export default Item;
