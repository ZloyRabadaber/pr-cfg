import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputIp from './InputIp'

export class PgbWiz extends React.Component {
    render() {
        var { wiz_ip
            , wiz_mask
            , wiz_gw
            , wiz_dns1
            , wiz_dns2
            , setPgbRight_wiz_ip
            , setPgbRight_wiz_mask
            , setPgbRight_wiz_gw
            , setPgbRight_wiz_dns1
            , setPgbRight_wiz_dns2
        } = this.props
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Адрес:</td>
                            <td><InputIp onChange={setPgbRight_wiz_ip} value={wiz_ip} /></td>
                        </tr>
                        <tr>
                            <td>Маска:</td>
                            <td><InputIp onChange={setPgbRight_wiz_mask} value={wiz_mask} /></td>
                        </tr>
                        <tr>
                            <td>Шлюз:</td>
                            <td><InputIp onChange={setPgbRight_wiz_gw} value={wiz_gw} /></td>
                        </tr>
                        <tr>
                            <td>ДНС 1:</td>
                            <td><InputIp onChange={setPgbRight_wiz_dns1} value={wiz_dns1} /></td>
                        </tr>
                        <tr>
                            <td>ДНС 2:</td>
                            <td><InputIp onChange={setPgbRight_wiz_dns2} value={wiz_dns2} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        wiz_ip: Selectors.Configuration.getPgbRight(state).wiz_ip,
        wiz_mask: Selectors.Configuration.getPgbRight(state).wiz_mask,
        wiz_gw: Selectors.Configuration.getPgbRight(state).wiz_gw,
        wiz_dns1: Selectors.Configuration.getPgbRight(state).wiz_dns1,
        wiz_dns2: Selectors.Configuration.getPgbRight(state).wiz_dns2
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPgbRight_wiz_ip: (e) => { dispatch(Actions.Configuration.setPgbRight_wiz_ip(e)) },
        setPgbRight_wiz_mask: (e) => { dispatch(Actions.Configuration.setPgbRight_wiz_mask(e)) },
        setPgbRight_wiz_gw: (e) => { dispatch(Actions.Configuration.setPgbRight_wiz_gw(e)) },
        setPgbRight_wiz_dns1: (e) => { dispatch(Actions.Configuration.setPgbRight_wiz_dns1(e)) },
        setPgbRight_wiz_dns2: (e) => { dispatch(Actions.Configuration.setPgbRight_wiz_dns2(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PgbWiz);