import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'
import * as constants from "../constants"
import PgbTelit from "./PgbTelit"

class PgbLeftTypes extends React.Component {
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
                <option value={0}>Нет</option>
                <option value={2}>GSM (ВНАР.771504.073)</option>
            </select>
        );
    }
}

export class PgbLeft extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        if (constants.Static.PGB_TYPES[2] == null)
            constants.Static.PGB_TYPES[2] = <PgbTelit />;
    }
    componentWillMount() {
        if (this.props.pgb != constants.Static.PGB_TYPES[this.props.type])
            this.props.setPgb(constants.Static.PGB_TYPES[this.props.type])
    }
    componentWillReceiveProps(next) {
        if (this.props != next) {
            if (next.type != undefined)
                this.props.setPgb(constants.Static.PGB_TYPES[next.type])
        }
    }
    change(e) {
        this.props.setType(e)
        this.props.setPgb(constants.Static.PGB_TYPES[e])
    }
    render() {
        var { pgb
            , type
        } = this.props
        return (
            <div>
                <h2>Левый слот расширения</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Тип:</td>
                            <td><PgbLeftTypes onChange={this.change} value={type} /></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                {pgb}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pgb: Selectors.App.getUi(state).pgb_left,
        type: Selectors.Configuration.getPgbLeft(state).type
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPgb: (e) => { dispatch(Actions.App.setPgb_left(e)) },
        setType: (e) => { dispatch(Actions.Configuration.setPgbLeft_type(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PgbLeft);