import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'

class Destination extends React.Component {
    render() {
        var { host, user, pass, hostChange, userChange, passChange } = this.props;
        return (
            <div className='container-fluid m-1'>
                <div className='row'>
                    <div>Адрес:
                    <input className='m-1' placeholder="0.0.0.0" onChange={hostChange} value={host} />
                    </div>
                    <div>Пользователь:
                    <input className='m-1' onChange={userChange} value={user} />
                    </div>
                    <div>Пароль:
                    <input className='m-1' type="password" onChange={passChange} value={pass} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        host: Selectors.Destination.getHost(state),
        user: Selectors.Destination.getUser(state),
        pass: Selectors.Destination.getPass(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        hostChange: (e) => { dispatch(Actions.Destination.setHost(e.target.value)) },
        userChange: (e) => { dispatch(Actions.Destination.setUser(e.target.value)) },
        passChange: (e) => { dispatch(Actions.Destination.setPass(e.target.value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
