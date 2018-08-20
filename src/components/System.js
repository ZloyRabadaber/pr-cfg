import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'

export class System extends React.Component {
    render() {
        var { sleep, user, pass, setSystemSleep, setSystemUser, setSystemPass } = this.props
        return (
            <div>
                <h2>Система</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Экономия энергии:</td>
                            <td><input onChange={setSystemSleep} checked={sleep} type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>Пользователь:</td>
                            <td><input onChange={setSystemUser} value={user} /></td>
                        </tr>
                        <tr>
                            <td>Пароль:</td>
                            <td><input onChange={setSystemPass} value={pass} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sleep: Selectors.Configuration.getSystem(state).sleep,
        user: Selectors.Configuration.getSystem(state).user,
        pass: Selectors.Configuration.getSystem(state).pass
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSystem: (e) => { dispatch(Actions.Configuration.setSystem(e.target.value)) },
        setSystemSleep: (e) => { dispatch(Actions.Configuration.setSystemSleep(e.target.checked)) },
        setSystemUser: (e) => { dispatch(Actions.Configuration.setSystemUser(e.target.value)) },
        setSystemPass: (e) => { dispatch(Actions.Configuration.setSystemPass(e.target.value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(System);