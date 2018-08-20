import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'
import EthNum from './EthNum'
import InputIp from './InputIp'

export class Iec104 extends React.Component {
    render() {
        var { enable
            , eth
            , port
            , ip
            , asdu
            , maxcon
            , mess
            , t1
            , setIec104_enable
            , setIec104_eth
            , setIec104_port
            , setIec104_ip
            , setIec104_asdu
            , setIec104_maxcon
            , setIec104_mess
            , setIec104_t1
            , ip2int
            , int2ip
        } = this.props
        var t12sec = parseInt(t1) / 1000
        var t1Change = (e) => setIec104_t1(parseInt(e) * 1000)
        return (
            <div>
                <h2>IEC60870-5-104 слейв</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Включить:</td>
                            <td><input onChange={setIec104_enable} checked={enable} type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td>Интерфейс:</td>
                            <td><EthNum onChange={setIec104_eth} value={eth}/></td>
                        </tr>
                        <tr>
                            <td>Порт:</td>
                            <td><InputInteger onChange={setIec104_port} min={1} value={port} /></td>
                        </tr>
                        <tr>
                            <td>Адрес основного клиента:</td>
                            <td><InputIp onChange={setIec104_ip} value={ip} /></td>
                        </tr>
                        <tr>
                            <td>Адрес ASDU:</td>
                            <td><InputInteger onChange={setIec104_asdu} min={1} value={asdu} /></td>
                        </tr>
                        <tr>
                            <td>Количество клиентов:</td>
                            <td><InputInteger onChange={setIec104_maxcon} min={1} value={maxcon} /></td>
                        </tr>
                        <tr>
                            <td>Длинна сообщения (байт):</td>
                            <td><InputInteger onChange={setIec104_mess} min={32} max={250} value={mess} /></td>
                        </tr>
                        <tr>
                            <td>T1 (с):</td>
                            <td><InputInteger onChange={t1Change} min={1} value={t12sec} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        enable: Selectors.Configuration.getIec104(state).enable,
        eth: Selectors.Configuration.getIec104(state).eth,
        port: Selectors.Configuration.getIec104(state).port,
        ip: Selectors.Configuration.getIec104(state).ip,
        asdu: Selectors.Configuration.getIec104(state).asdu,
        maxcon: Selectors.Configuration.getIec104(state).maxcon,
        mess: Selectors.Configuration.getIec104(state).mess,
        t1: Selectors.Configuration.getIec104(state).t1,
        int2ip: Selectors.SystemAPI.int2ip,
        ip2int: Selectors.SystemAPI.ip2int
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIec104: (e) => { dispatch(Actions.Configuration.setIec104(e)) },
        setIec104_enable: (e) => { dispatch(Actions.Configuration.setIec104_enable(e.target.checked)) },
        setIec104_eth: (e) => { dispatch(Actions.Configuration.setIec104_eth(e)) },
        setIec104_port: (e) => { dispatch(Actions.Configuration.setIec104_port(e)) },
        setIec104_ip: (e) => { dispatch(Actions.Configuration.setIec104_ip(e)) },
        setIec104_asdu: (e) => { dispatch(Actions.Configuration.setIec104_asdu(e)) },
        setIec104_maxcon: (e) => { dispatch(Actions.Configuration.setIec104_maxcon(e)) },
        setIec104_mess: (e) => { dispatch(Actions.Configuration.setIec104_mess(e)) },
        setIec104_t1: (e) => { dispatch(Actions.Configuration.setIec104_t1(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Iec104);