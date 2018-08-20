import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'

export class Di extends React.Component {
    render() {
        var { time
            , filter
            , sample
            , weight
            , setDiTime
            , setDiFilter
            , setDiSample
            , setDiWeight } = this.props
        return (
            <div>
                <h2>Дискретные входы</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Период опроса (мс):</td>
                            <td><InputInteger onChange={setDiTime} min={1} value={time} /></td>
                        </tr>
                        <tr>
                            <td>Время фильтрации (мс):</td>
                            <td><InputInteger onChange={setDiFilter} min={0} value={filter} /></td>
                        </tr>
                        <tr>
                            <td>Количество измерений:</td>
                            <td><InputInteger onChange={setDiSample} min={0} value={sample} /></td>
                        </tr>
                        <tr>
                            <td>Вес (%):</td>
                            <td><InputInteger onChange={setDiWeight} min={51} max={100} value={weight} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        time: Selectors.Configuration.getDi(state).time,
        filter: Selectors.Configuration.getDi(state).filter,
        sample: Selectors.Configuration.getDi(state).sample,
        weight: Selectors.Configuration.getDi(state).weight
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDiTime: (e) => { dispatch(Actions.Configuration.setDiTime(e)) },
        setDiFilter: (e) => { dispatch(Actions.Configuration.setDiFilter(e)) },
        setDiSample: (e) => { dispatch(Actions.Configuration.setDiSample(e)) },
        setDiWeight: (e) => { dispatch(Actions.Configuration.setDiWeight(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Di);