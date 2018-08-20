import React from 'react'
import autoBind from 'react-autobind'

export default class InputIp extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.state = {
            value: ''
        }
    }
    componentDidMount() {
        if (this.props.value != undefined) {
            var ip = this.int2ip(this.props.value)
            this.setState({ value: ip })
            this.testValue(ip)
        }
    }
    componentWillReceiveProps(next) {
        if (this.props != next) {
            if (next.value != undefined) {
                var ip = this.int2ip(next.value)
                if (ip != this.state.value) {
                    this.setState({ value: ip })
                    this.testValue(ip)
                }
            }
        }
    }
    int2ip(ipInt) {
        return ((ipInt & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >>> 24));
    }
    ip2int(ip) {
        return ip.split('.').reduceRight(function (ipInt, octet) { return (ipInt << 8) + parseInt(octet, 10) }, 0) >>> 0;
    }
    testValue(e) {
        var chk = e.split('.')
        if (chk.length == 4 && chk.every((v, i, a) => {
            if (v == null || v == undefined || v === "" || v != parseInt(v) || parseInt(v) > 255)
                return false
            return true
        })) {
            try {
                this.refs.input.style.background = null
            } catch (err) { }
            return true
        }
        try {
            this.refs.input.style.background = 'red'
        } catch (err) { }
        return false
    }
    changed(e) {
        this.setState({ value: e.target.value })

        if (this.testValue(e.target.value)) {
            if (this.props.onChange)
                this.props.onChange(this.ip2int(e.target.value))
        }
    }
    render() {
        return (
            <input ref='input' onChange={this.changed} value={this.state.value} />
        )
    }
}
