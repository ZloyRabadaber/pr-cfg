import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'

export class Do extends React.Component {
    render() {
        var { time
            , wait
            , setDoTime
            , setDoWait } = this.props
        return (
            <div>
                <h2>Дискретные выходы</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Период опроса (мс):</td>
                            <td><InputInteger onChange={setDoTime} min={1} value={time} /></td>
                        </tr>
                        <tr>
                            <td>Время установки (мс):</td>
                            <td><InputInteger onChange={setDoWait} min={0} value={wait} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        time: Selectors.Configuration.getDo(state).time,
        wait: Selectors.Configuration.getDo(state).wait
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDoTime: (e) => { dispatch(Actions.Configuration.setDoTime(e)) },
        setDoWait: (e) => { dispatch(Actions.Configuration.setDoWait(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Do);