import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'

class TelitMode extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            Value: 0
        }
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
        return this.state.Value
    }
    set value(v) {
        this.setState({ Value: parseInt(v) })
    }
    change(e) {
        var value = parseInt(e.target.value)
        this.setState({ Value: value })
        if (this.props.onChange)
            this.props.onChange(value)
    }
    render() {
        return (
            <select ref='instance' onChange={this.change} value={this.state.Value}>
                <option value={0}>Выключен</option>
                <option value={1}>Данные</option>
                <option value={2}>SMS</option>
            </select>
        );
    }
}

class TelitSIM extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            Value: 0
        }
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
        return this.state.Value
    }
    set value(v) {
        this.setState({ Value: parseInt(v) })
    }
    change(e) {
        var value = parseInt(e.target.value)
        this.setState({ Value: value })
        if (this.props.onChange)
            this.props.onChange(value)
    }
    render() {
        return (
            <select ref='instance' onChange={this.change} value={this.state.Value}>
                <option value={0}>Любая</option>
                <option value={1}>Слот 1</option>
                <option value={2}>Слот 2</option>
            </select>
        );
    }
}

export class PgbTelit extends React.Component {
    render() {
        var { telit_mode
            , telit_wait_power
            , telit_ppp_timeout
            , telit_ppp_apn
            , telit_ppp_user
            , telit_ppp_pass
            , telit_ppp_sim
            , setPgbLeft_telit_mode
            , setPgbLeft_telit_wait_power
            , setPgbLeft_telit_ppp_timeout
            , setPgbLeft_telit_ppp_apn
            , setPgbLeft_telit_ppp_user
            , setPgbLeft_telit_ppp_pass
            , setPgbLeft_telit_ppp_sim
        } = this.props
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Режим работы:</td>
                            <td><TelitMode onChange={setPgbLeft_telit_mode} value={telit_mode} /></td>
                        </tr>
                        <tr>
                            <td>Время включения (мс):</td>
                            <td><InputInteger onChange={setPgbLeft_telit_wait_power} min={1} value={telit_wait_power} /></td>
                        </tr>
                        <tr>
                            <td>Время ожидания ответа (мс):</td>
                            <td><InputInteger onChange={setPgbLeft_telit_ppp_timeout} min={1} value={telit_ppp_timeout} /></td>
                        </tr>
                        <tr>
                            <td>АПН:</td>
                            <td><input onChange={setPgbLeft_telit_ppp_apn} value={telit_ppp_apn} /></td>
                        </tr>
                        <tr>
                            <td>Пользователь:</td>
                            <td><input onChange={setPgbLeft_telit_ppp_user} value={telit_ppp_user} /></td>
                        </tr>
                        <tr>
                            <td>Пароль:</td>
                            <td><input onChange={setPgbLeft_telit_ppp_pass} value={telit_ppp_pass} /></td>
                        </tr>
                        <tr>
                            <td>SIM-карта:</td>
                            <td><TelitSIM onChange={setPgbLeft_telit_ppp_sim} value={telit_ppp_sim} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        telit_mode: Selectors.Configuration.getPgbLeft(state).telit_mode,
        telit_wait_power: Selectors.Configuration.getPgbLeft(state).telit_wait_power,
        telit_ppp_timeout: Selectors.Configuration.getPgbLeft(state).telit_ppp_timeout,
        telit_ppp_apn: Selectors.Configuration.getPgbLeft(state).telit_ppp_apn,
        telit_ppp_user: Selectors.Configuration.getPgbLeft(state).telit_ppp_user,
        telit_ppp_pass: Selectors.Configuration.getPgbLeft(state).telit_ppp_pass,
        telit_ppp_sim: Selectors.Configuration.getPgbLeft(state).telit_ppp_sim
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPgbLeft_telit_mode: (e) => { dispatch(Actions.Configuration.setPgbLeft_telit_mode(e)) },
        setPgbLeft_telit_wait_power: (e) => { dispatch(Actions.Configuration.setPgbLeft_telit_wait_power(e)) },
        setPgbLeft_telit_ppp_timeout: (e) => { dispatch(Actions.Configuration.setPgbLeft_telit_ppp_timeout(e)) },
        setPgbLeft_telit_ppp_apn: (e) => { dispatch(Actions.Configuration.setPgbLeft_telit_ppp_apn(e.target.value)) },
        setPgbLeft_telit_ppp_user: (e) => { dispatch(Actions.Configuration.setPgbLeft_telit_ppp_user(e.target.value)) },
        setPgbLeft_telit_ppp_pass: (e) => { dispatch(Actions.Configuration.setPgbLeft_telit_ppp_pass(e.target.value)) },
        setPgbLeft_telit_ppp_sim: (e) => { dispatch(Actions.Configuration.setPgbLeft_telit_ppp_sim(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PgbTelit);