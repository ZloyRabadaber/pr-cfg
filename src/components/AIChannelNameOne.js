import React from 'react'

export default class AIChannelNameOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Value: '0'
        }
        this.change = this.change.bind(this);
    }
    change(e) {
        this.setState({Value: e.target.value})
        if (this.props.onChange)
            this.props.onChange();
    }
    render() {
        return (
            <select onChange={this.change} value={this.state.Value}>
                <option value='0'>Канал 1 (внутр.)</option>
                <option value='1'>Канал 2 (внутр.)</option>
                <option value='2'>Канал 3 (внутр.)</option>
                <option value='3'>Канал 4 (внутр.)</option>
                <option value='4'>Канал 1 (расшир.)</option>
                <option value='5'>Канал 2 (расшир.)</option>
                <option value='6'>Канал 3 (расшир.)</option>
                <option value='7'>Канал 4 (расшир.)</option>
                <option value='8'>Канал 5 (расшир.)</option>
                <option value='9'>Канал 6 (расшир.)</option>
                <option value='10'>Канал 7 (расшир.)</option>
                <option value='11'>Канал 8 (расшир.)</option>
            </select>
        );
    }
}