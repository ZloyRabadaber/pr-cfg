import React from 'react'
import autoBind from 'react-autobind'

export default class EthChannelNum extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.state = { Value: 0}

        if (this.props.value != undefined)
            this.state.Value = parseInt(this.props.value)
    }

    componentWillReceiveProps(next) {
        if (this.props != next) {
            if (next.value != undefined)
                this.value = parseInt(next.value)
        }
    }

    get value() {
        return parseInt(this.state.Value)
    }

    set value(v) {
        this.state.Value = parseInt(v)
    }

    change(e) {
        this.value = parseInt(e.target.value)
        if (this.props.onChange != undefined)
            this.props.onChange(parseInt(this.value))
    }

    render() {
        return (
            <select ref='instance' onChange={this.change} value={this.state.Value}>
                <option value={0}>Любой</option>
                <option value={1}>Ethernet</option>
                <option value={2}>Модем GSM</option>
                <option value={3}>USB</option>
            </select>
        );
    }
}