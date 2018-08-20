import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'

export class Dac extends React.Component {
    render() {
        var { time
            , sample
            , hold
            , refresh
            , setDacTime
            , setDacSample
            , setDacHold
            , setDacRefresh } = this.props
        return (
            <div>
                <h2>Аналоговые выходы</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Период обновления (мс):</td>
                            <td><InputInteger onChange={setDacTime} min={1} value={time} /></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>Энергосберегающий режим:</td>
                        </tr>
                        <tr>
                            <td>Время выборки (0-1023):</td>
                            <td><InputInteger onChange={setDacSample} min={0} max={1023} value={sample} /></td>
                        </tr>
                        <tr>
                            <td>Время удержания (0-1023):</td>
                            <td><InputInteger onChange={setDacHold} min={0} max={1023} value={hold} /></td>
                        </tr>
                        <tr>
                            <td>Время обновления (0-255):</td>
                            <td><InputInteger onChange={setDacRefresh} min={0} max={255} value={refresh} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        time: Selectors.Configuration.getDac(state).time,
        sample: Selectors.Configuration.getDac(state).sample,
        hold: Selectors.Configuration.getDac(state).hold,
        refresh: Selectors.Configuration.getDac(state).refresh
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDacTime: (e) => { dispatch(Actions.Configuration.setDacTime(e)) },
        setDacSample: (e) => { dispatch(Actions.Configuration.setDacSample(e)) },
        setDacHold: (e) => { dispatch(Actions.Configuration.setDacHold(e)) },
        setDacRefresh: (e) => { dispatch(Actions.Configuration.setDacRefresh(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dac);