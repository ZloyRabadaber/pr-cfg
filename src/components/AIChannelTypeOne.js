import React from 'react'

export default class AIChannelTypeOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Value: '0'
        }
        this.change = this.change.bind(this);
    }
    change(e) {
        this.setState({ Value: e.target.value })
        if (this.props.onChange)
            this.props.onChange();
    }
    render() {
        return (
            <select onChange={this.change} value={this.state.Value}>
                <option value='0'>+- 20 мА</option>
                <option value='1'>+- 10 В</option>
            </select>
        );
    }
}