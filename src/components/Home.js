import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'

export class Home extends React.Component {
    render() {
        var { info } = this.props
        return (
            <div>
                <h2>Обзор</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Версия ПО:</td>
                            <td>{info.firmware}</td>
                        </tr>
                        <tr>
                            <td>ВНАР:</td>
                            <td>{info.vnar}</td>
                        </tr>
                        <tr>
                            <td>Идентификатор:</td>
                            <td>{info.uid}</td>
                        </tr>
                        <tr>
                            <td>Версия конфигурации:</td>
                            <td>{info.cfgVersion}</td>
                        </tr>
                        <tr>
                            <td>Время конфигурации:</td>
                            <td>{info.cfgTime}</td>
                        </tr>
                        <tr>
                            <td>Время в контроллере:</td>
                            <td>{info.time}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        info: Selectors.Configuration.getInfo(state),
    };
}

export default connect(mapStateToProps)(Home);