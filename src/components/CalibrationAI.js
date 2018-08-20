import React from 'react'
import Modal from './Modal'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import AIChannelTypeOne from './AIChannelTypeOne'
import AIChannelNameOne from './AIChannelNameOne'

class CalibrationAI extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.request = new XMLHttpRequest();
    }

    sendRequest(url, body) {
        var { host, user, pass, sendRequest } = this.props
        return sendRequest(this.request, host, 'POST', url, body, user, pass)
    }

    isAbort(err) {
        if (err) {
            console.log(err)
            if (this.request != undefined) {
                this.request.abort()
                return true
            }
        }
        return false
    }

    async sendCalibration(act) {
        //"ch=" + channel + "&typ=" + chType + "&act=" + act
        return await this.sendRequest("/rest/v1/calib", "ch=" + this.refs.channel.state.Value + "&typ=" + this.refs.chType.state.Value + "&act=" + act)
            .then((response) => {
                if (response)
                    console.log(response);
            })
            .catch((err) => {
                return err
            })
    }

    async isError(err) {
        if (err) {
            await this.refs.modal.openModal("Ошибка", err, true, false)
            return true
        }
        return false
    }

    async calibration() {
        console.log("calibration analog inputs");

        if (this.isAbort(await this.refs.modal.openModal("", "Задайте значение нижней границы", true)))
            return
        console.log("low calibration analog inputs");
        this.refs.modal.showModal("", "Калибровка по нижней границе")
            .then()
            .catch((err) => {
                this.isAbort(err)
                return
            })
        if (await this.isError(await this.sendCalibration(0)))
            return
        this.refs.modal.acceptModal()

        if (this.isAbort(await this.refs.modal.openModal("", "Задайте значение верхней границы", true)))
            return
        console.log("hi calibration analog inputs");
        this.refs.modal.showModal("", "Калибровка по верхней границе")
            .then()
            .catch((err) => {
                this.isAbort(err)
                return
            })
        if (await this.isError(await this.sendCalibration(1)))
            return
        this.refs.modal.acceptModal()
    }

    async calibSave() {
        console.log("save calibration analog inputs");

        this.refs.modal.showModal("", "Сохранение коэффициентов калибровки")
            .then()
            .catch((err) => {
                this.isAbort(err)
                return
            })

        var res;
        await this.sendRequest("/rest/v1/calib", "save=1")
            .then((response) => {
                if (response)
                    console.log(response);
            })
            .catch((err) => {
                res = err
            })
        if (await this.isError(res))
            return

        await this.refs.modal.openModal("", "Коэффициенты сохранены", true, false)

        this.refs.modal.acceptModal()
    }

    render() {
        var { kx, sx } = this.props;
        return (
            <div>
                <h2>Калибровка аналоговых входов</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Канал:</td>
                            <td><AIChannelNameOne ref="channel" /></td>
                        </tr>
                        <tr>
                            <td>Тип:</td>
                            <td><AIChannelTypeOne ref="chType" /></td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button className="btn btn-warning btn-sm ml-1 my-1" onClick={this.calibration}
                                >Калибровать</button>
                            </td>
                            <td>
                                <button className="btn btn-success btn-sm ml-1 my-1" onClick={this.calibSave}
                                >Сохранить</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Modal ref='modal' />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        kx: Selectors.Calibration.getKx(state),
        sx: Selectors.Calibration.getSx(state),
        host: Selectors.Destination.getHost(state),
        user: Selectors.Destination.getUser(state),
        pass: Selectors.Destination.getPass(state),
        sendRequest: Selectors.SystemAPI.sendRequest
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setKx: (e) => { dispatch(Actions.Calibration.setKx(e)) },
        SetSx: (e) => { dispatch(Actions.Calibration.setSx(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalibrationAI);
