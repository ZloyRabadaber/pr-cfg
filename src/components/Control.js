import React from 'react'
import Modal from './Modal'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import * as constants from "../constants"

require("babel-core/register")
require("babel-polyfill")

class Control extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.request = new XMLHttpRequest()
        this.state = { changed: false }
    }

    sendRequest(method, url, body, user = this.props.user, pass = this.props.pass) {
        var { host, sendRequest } = this.props
        return sendRequest(this.request, host, method, url, body, user, pass)
    }

    async isError(err) {
        if (err) {
            await this.refs.modal.openModal("Ошибка", err, true, false)
            return true
        }
        return false
    }

    async downloadPart(part, setter) {
        console.log("download part: " + part);

        return this.sendRequest("GET", "/rest/v1/cfg/" + part, "")
            .then((response) => {
                if (response)
                    console.log(response);
                try {
                    var cfg = JSON.parse(response)
                    if (setter) {
                        setter(cfg)
                    }
                }
                catch (e) {
                    return err
                }
            })
            .catch((err) => {
                return err
            })
    }

    async download() {
        console.log("download configuration")

        this.refs.modal.showModal("", "Загрузка конфигурации")
            .then((response) => {
            })
            .catch((err) => {
                console.log(err)
                this.request.abort()
                return
            })

        if (await this.isError(await this.downloadPart("info", this.props.setInfo))
            || await this.isError(await this.downloadPart("system", this.props.setSystem))
            || await this.isError(await this.downloadPart("di", this.props.setDi))
            || await this.isError(await this.downloadPart("do", this.props.setDo))
            || await this.isError(await this.downloadPart("dac", this.props.setDac))
            || await this.isError(await this.downloadPart("adc", this.props.setAdc))
            || await this.isError(await this.downloadPart("db", this.props.setDb))
            || await this.isError(await this.downloadPart("iec104", this.props.setIec104))
            || await this.isError(await this.downloadPart("journals", this.props.setJournals))
            || await this.isError(await this.downloadPart("pgb_right", this.props.setPgbRight))
            || await this.isError(await this.downloadPart("pgb_left", this.props.setPgbLeft)))
            return

        this.props.setCfg_changed(false)
        this.refs.modal.acceptModal()
    }

    async uploadPart(part, body, user = this.props.user, pass = this.props.pass) {
        console.log("upload part: " + part + " body:" + body);

        return await this.sendRequest("POST", "/rest/v1/cfg/" + part, body, user, pass)
            .then((response) => {
                if (response)
                    console.log(response);
            })
            .catch((err) => {
                return err
            })
    }

    async restRequest(method, url, body, user = this.props.user, pass = this.props.pass) {
        console.log("request: " + method + " " + url + " body:" + body);

        return await this.sendRequest(method, url, body, user, pass)
            .then((response) => {
                if (response)
                    console.log(response);
            })
            .catch((err) => {
                return err
            })
    }

    async upload() {
        console.log("upload configuration");

        this.refs.modal.showModal("", "Запись конфигурации")
            .then((response) => {
            })
            .catch((err) => {
                console.log(err)
                this.request.abort()
                return
            })

        var t = new Date();
        var t_str = t.getHours() + ":" +
            t.getMinutes() + ":" +
            t.getSeconds() + " " +
            t.getDate() + "/" +
            (t.getMonth() + 1) + "/" +
            t.getFullYear();
        var infoNew = { ...this.props.info, cfgVersion: '0.1', cfgTime: t_str }
        if (await this.isError(await this.uploadPart("info", JSON.stringify(infoNew)))
            || await this.isError(await this.uploadPart("di", JSON.stringify(this.props.di)))
            || await this.isError(await this.uploadPart("do", JSON.stringify(this.props.do)))
            || await this.isError(await this.uploadPart("dac", JSON.stringify(this.props.dac)))
            || await this.isError(await this.uploadPart("adc", JSON.stringify(this.props.adc)))
            || await this.isError(await this.uploadPart("db", JSON.stringify(this.props.db)))
            || await this.isError(await this.uploadPart("iec104", JSON.stringify(this.props.iec104)))
            || await this.isError(await this.uploadPart("journals", JSON.stringify(this.props.journals)))
            || await this.isError(await this.uploadPart("pgb_right", JSON.stringify(this.props.pgb_right)))
            || await this.isError(await this.uploadPart("pgb_left", JSON.stringify(this.props.pgb_left))))
            return

        if (await this.isError(await this.uploadPart("system", JSON.stringify(this.props.system))))
            return;

        console.log("save and restart configuration");
        if (await this.isError(await this.restRequest("POST", "/rest/v1/save", "", this.props.system.user, this.props.system.pass))
            || await this.isError(await this.restRequest("POST", "/rest/v1/restart", "", this.props.system.user, this.props.system.pass)))
            return

        this.props.setCfg_changed(false)
        this.refs.modal.acceptModal();
    }

    async reset() {
        console.log("restart");

        this.refs.modal.showModal("", "Рестарт контроллера")
            .then((response) => {
            })
            .catch((err) => {
                console.log(err)
                this.request.abort()
                return
            })

        if (this.isError(await this.restRequest("POST", "/rest/v1/restart", "")))
            return

        this.refs.modal.acceptModal();
    }

    newConfiguration() {
        this.props.setCfg(constants.Defaults.STATE.configuration)
    }

    save(e) {
        var blob = new Blob([JSON.stringify(this.props.cfg, null, '\t')], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "unnamed.cfg", true);
    }

    open(e) {
        var _this = this;
        var inp = e.target;
        if (inp.files[0]) {
            var f = inp.files[0];
            var reader = new FileReader();
            reader.onload = (function (x) {
                return function (e) {
                    try {
                        var cfg = JSON.parse(e.target.result);
                        _this.props.setCfg(cfg);
                        _this.refs.modal.openModal("", "Конфигурация загружена успешно!", true, false)
                    }
                    catch (e) {
                        _this.refs.modal.openModal("Ошибка конфигурации!", e.message, true, false)
                    }
                    inp.value = "";
                }
            })(f);
            reader.onerror = (function (x) {
                return function (e) {
                    _this.refs.modal.openModal("Ошибка чтения файла!", e.message, true, false)
                    inp.value = "";
                }
            })(f);
            reader.readAsText(f);
        }
    }

    selectFile() {
        this.refs.inputOpen.click()
    }

    render() {
        var chStyle = this.props.cfgChanged ? "btn btn-danger btn-sm ml-1 my-1" : "btn btn-primary btn-sm ml-1 my-1"
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <button className="btn btn-primary btn-sm ml-1 my-1" onClick={this.newConfiguration}>Новая</button>
                    <button className="btn btn-primary btn-sm ml-1 my-1" onClick={this.download}>Выгрузить</button>
                    <button className={chStyle} onClick={this.upload}>Загрузить</button>
                    <button className="btn btn-primary btn-sm ml-1 my-1" onClick={this.save}>Сохранить</button>
                    <button className="btn btn-primary btn-sm ml-1 my-1" onClick={this.selectFile}>Открыть</button>
                    <button className="btn btn-primary btn-sm ml-1 my-1" onClick={this.reset}>Перезагрузка</button>
                </div>
                <input ref="inputOpen" type="file" onChange={this.open} style={{ display: 'none' }} />
                <Modal ref='modal' />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cfg: Selectors.Configuration.getAll(state),
        cfgChanged: Selectors.Configuration.getAll(state).changed,
        info: Selectors.Configuration.getInfo(state),
        system: Selectors.Configuration.getSystem(state),
        di: Selectors.Configuration.getDi(state),
        do: Selectors.Configuration.getDo(state),
        dac: Selectors.Configuration.getDac(state),
        adc: Selectors.Configuration.getAdc(state),
        db: Selectors.Configuration.getDb(state),
        host: Selectors.Destination.getHost(state),
        user: Selectors.Destination.getUser(state),
        pass: Selectors.Destination.getPass(state),
        iec104: Selectors.Configuration.getIec104(state),
        pgb_right: Selectors.Configuration.getPgbRight(state),
        pgb_left: Selectors.Configuration.getPgbLeft(state),
        journals: Selectors.Configuration.getJournals(state),
        sendRequest: Selectors.SystemAPI.sendRequest
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCfg: (e) => { dispatch(Actions.Configuration.setCfg(e)) },
        setCfg_changed: (e) => { dispatch(Actions.Configuration.setCfg_changed(e)) },
        setInfo: (e) => { dispatch(Actions.Configuration.setInfo(e)) },
        setSystem: (e) => { dispatch(Actions.Configuration.setSystem(e)) },
        setDi: (e) => { dispatch(Actions.Configuration.setDi(e)) },
        setDo: (e) => { dispatch(Actions.Configuration.setDo(e)) },
        setDac: (e) => { dispatch(Actions.Configuration.setDac(e)) },
        setAdc: (e) => { dispatch(Actions.Configuration.setAdc(e)) },
        setDb: (e) => { dispatch(Actions.Configuration.setDb(e)) },
        setJournals: (e) => { dispatch(Actions.Configuration.setJournals(e)) },
        setIec104: (e) => { dispatch(Actions.Configuration.setIec104(e)) },
        setPgbRight: (e) => { dispatch(Actions.Configuration.setPgbRight(e)) },
        setPgbLeft: (e) => { dispatch(Actions.Configuration.setPgbLeft(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);
