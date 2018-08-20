import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'

export class Db extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)
    }
    generateDi(value) {
        this.props.setDb_di(value)
        this.props.setDb_dobi(value + 16)
        this.props.setDb_doerr(value + 16 + 16)
        this.props.setDb_mbm485di(value + 16 + 16 + 16)
    }
    generateAi(value) {
        this.props.setDb_ai(value)
        this.props.setDb_aiext(value + 4)
        this.props.setDb_mbm485ai(value + 4 + 8)
    }
    generateDo(value) {
        this.props.setDb_do(value)
        this.props.setDb_mbm485do(value + 16)
    }
    generateSi(value) {
        this.props.setDb_scalei(value)
        this.props.setDb_mbm485sci(value)
    }
    generateAo(value) {
        this.props.setDb_ao(value)
        this.props.setDb_mbm485ao(value + 1)
    }
    generateSo(value) {
        this.props.setDb_scaleo(value)
        this.props.setDb_mbm485sco(value)
    }
    render() {
        var {
            di,
            _do,
            ai,
            ao,
            scalei,
            scaleo,
            dicount,
            aicount,
            sccount,
            evtfile,
            setDb_dicount,
            setDb_aicount,
            setDb_sccount,
            setDb_evtfile
        } = this.props
        return (
            <div>
                <h2>База данных</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Дискретные данные:</td>
                            <td><InputInteger onChange={this.generateDi} min={0} value={di} /></td>
                        </tr>
                        <tr>
                            <td>Целочисленные данные:</td>
                            <td><InputInteger onChange={this.generateAi} min={0} value={ai} /></td>
                        </tr>
                        <tr>
                            <td>Дискретные параметры:</td>
                            <td><InputInteger onChange={this.generateDo} min={0} value={_do} /></td>
                        </tr>
                        <tr>
                            <td>Вещественные данные:</td>
                            <td><InputInteger onChange={this.generateSi} min={0} value={scalei} /></td>
                        </tr>
                        <tr>
                            <td>Целочисленные параметры:</td>
                            <td><InputInteger onChange={this.generateAo} min={0} value={ao} /></td>
                        </tr>
                        <tr>
                            <td>Вещественные параметры:</td>
                            <td><InputInteger onChange={this.generateSo} min={0} value={scaleo} /></td>
                        </tr>
                        <tr>
                            <td colSpan='2'><br />Размер буфера событий:</td>
                        </tr>
                        <tr>
                            <td>Дискретные данные:</td>
                            <td><InputInteger onChange={setDb_dicount} min={0} value={dicount} /></td>
                        </tr>
                        <tr>
                            <td>Целочисленные данные:</td>
                            <td><InputInteger onChange={setDb_aicount} min={0} value={aicount} /></td>
                        </tr>
                        <tr>
                            <td>Вещественные данные:</td>
                            <td><InputInteger onChange={setDb_sccount} min={0} value={sccount} /></td>
                        </tr>
                        <tr>
                            <td colSpan='2'><br />Кэширование буфера событий:</td>
                        </tr>
                        <tr>
                            <td>Количество файлов (0-отключить):</td>
                            <td><InputInteger onChange={setDb_evtfile} min={0} max={100} value={evtfile} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        di: Selectors.Configuration.getDb(state).di,
        dobi: Selectors.Configuration.getDb(state).dobi,
        doerr: Selectors.Configuration.getDb(state).doerr,
        mbm485di: Selectors.Configuration.getDb(state).mbm485di,
        _do: Selectors.Configuration.getDb(state).do,
        mbm485do: Selectors.Configuration.getDb(state).mbm485do,
        ai: Selectors.Configuration.getDb(state).ai,
        aiext: Selectors.Configuration.getDb(state).aiext,
        mbm485ai: Selectors.Configuration.getDb(state).mbm485ai,
        ao: Selectors.Configuration.getDb(state).ao,
        mbm485ao: Selectors.Configuration.getDb(state).mbm485ao,
        scalei: Selectors.Configuration.getDb(state).scalei,
        mbm485sci: Selectors.Configuration.getDb(state).mbm485sci,
        scaleo: Selectors.Configuration.getDb(state).scaleo,
        mbm485sco: Selectors.Configuration.getDb(state).mbm485sco,
        dicount: Selectors.Configuration.getDb(state).dicount,
        aicount: Selectors.Configuration.getDb(state).aicount,
        sccount: Selectors.Configuration.getDb(state).sccount,
        evtfile: Selectors.Configuration.getDb(state).evtfile
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDb_di: (e) => { dispatch(Actions.Configuration.setDb_di(e)) },
        setDb_dobi: (e) => { dispatch(Actions.Configuration.setDb_dobi(e)) },
        setDb_doerr: (e) => { dispatch(Actions.Configuration.setDb_doerr(e)) },
        setDb_mbm485di: (e) => { dispatch(Actions.Configuration.setDb_mbm485di(e)) },
        setDb_do: (e) => { dispatch(Actions.Configuration.setDb_do(e)) },
        setDb_mbm485do: (e) => { dispatch(Actions.Configuration.setDb_mbm485do(e)) },
        setDb_ai: (e) => { dispatch(Actions.Configuration.setDb_ai(e)) },
        setDb_aiext: (e) => { dispatch(Actions.Configuration.setDb_aiext(e)) },
        setDb_mbm485ai: (e) => { dispatch(Actions.Configuration.setDb_mbm485ai(e)) },
        setDb_ao: (e) => { dispatch(Actions.Configuration.setDb_ao(e)) },
        setDb_mbm485ao: (e) => { dispatch(Actions.Configuration.setDb_mbm485ao(e)) },
        setDb_scalei: (e) => { dispatch(Actions.Configuration.setDb_scalei(e)) },
        setDb_mbm485sci: (e) => { dispatch(Actions.Configuration.setDb_mbm485sci(e)) },
        setDb_scaleo: (e) => { dispatch(Actions.Configuration.setDb_scaleo(e)) },
        setDb_mbm485sco: (e) => { dispatch(Actions.Configuration.setDb_mbm485sco(e)) },
        setDb_dicount: (e) => { dispatch(Actions.Configuration.setDb_dicount(e)) },
        setDb_aicount: (e) => { dispatch(Actions.Configuration.setDb_aicount(e)) },
        setDb_sccount: (e) => { dispatch(Actions.Configuration.setDb_sccount(e)) },
        setDb_evtfile: (e) => { dispatch(Actions.Configuration.setDb_evtfile(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Db);