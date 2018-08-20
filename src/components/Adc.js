import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'

export class Adc extends React.Component {
    render() {
        var { time
            , setAdcTime } = this.props
        return (
            <div>
                <h2>Аналоговые входы</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Период обновления (мс):</td>
                            <td><InputInteger onChange={setAdcTime} min={1} value={time} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        time: Selectors.Configuration.getAdc(state).time
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAdcTime: (e) => { dispatch(Actions.Configuration.setAdcTime(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adc);