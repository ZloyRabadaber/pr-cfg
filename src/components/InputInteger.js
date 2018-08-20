import React from 'react'
import autoBind from 'react-autobind'
import NumberFormat from 'react-number-format'

export default class InputInteger extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.state = {
            value: ''
        }
    }
    componentDidMount() {
        this.setState({ value: this.props.value })
        this.testValue(this.props.value)
    }
    componentWillReceiveProps(next) {
        if (this.props != next) {
            this.setState({ value: next.value })
            this.testValue(next.value)
        }
    }
    isAllowedInt(value) {
        if (value.floatValue != undefined && value.formattedValue != parseInt(value.floatValue))
            return false
        return true;
    }
    testValue(value, e) {
        var isMinOK = this.props.min == undefined
        isMinOK |= isNaN(parseInt(this.props.min))
        isMinOK |= value >= this.props.min

        var isMaxOK = this.props.max == undefined
        isMaxOK |= isNaN(parseInt(this.props.max))
        isMaxOK |= value <= this.props.max

        if (value != undefined && isMinOK && isMaxOK) {
            try {
                e.target.style.background = null
            } catch (err) { }
            return true
        }
        try {
            e.target.style.background = 'red'
        } catch (err) { }
        return false
    }
    changed(value, e) {
        if (this.testValue(value.floatValue, e)) {
            if (this.props.onChange)
                this.props.onChange(value.floatValue)
        }
    }
    render() {
        return (
            <NumberFormat ref='input' isAllowed={this.isAllowedInt} onValueChange={this.changed} value={this.state.value} />
        )
    }
}
