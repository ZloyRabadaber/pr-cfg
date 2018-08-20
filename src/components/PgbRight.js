import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'
import * as constants from "../constants"
import PgbWiz from "./PgbWiz"

class PgbRightTypes extends React.Component {
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
                <option value={1}>Ethernet (ВНАР.771504.075)</option>
            </select>
        );
    }
}

export class PgbRight extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        if (constants.Static.PGB_TYPES[1] == null)
            constants.Static.PGB_TYPES[1] = <PgbWiz />;
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
                <h2>Правый слот расширения</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Тип:</td>
                            <td><PgbRightTypes onChange={this.change} value={type} /></td>
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
        pgb: Selectors.App.getUi(state).pgb_right,
        type: Selectors.Configuration.getPgbRight(state).type
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPgb: (e) => { dispatch(Actions.App.setPgb_right(e)) },
        setType: (e) => { dispatch(Actions.Configuration.setPgbRight_type(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PgbRight);