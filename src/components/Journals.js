import React from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as Selectors from '../reducers'
import InputInteger from './InputInteger'

export class Journals extends React.Component {
    render() {
        var { count
            , size
            , operator
            , setJournals_count
            , setJournals_size
            , setJournals_operator } = this.props
        return (
            <div>
                <h2>Журналы</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Количество файлов:</td>
                            <td><InputInteger onChange={setJournals_count} min={0} value={count} /></td>
                        </tr>
                        <tr>
                            <td>Размер файлов (байт):</td>
                            <td><InputInteger onChange={setJournals_size} min={0} value={size} /></td>
                        </tr>
                        <tr>
                            <td>Команды оператора:</td>
                            <td><input onChange={setJournals_operator} checked={operator} type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: Selectors.Configuration.getJournals(state).count,
        size: Selectors.Configuration.getJournals(state).size,
        operator: Selectors.Configuration.getJournals(state).operator
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setJournals_count: (e) => { dispatch(Actions.Configuration.setJournals_count(e)) },
        setJournals_size: (e) => { dispatch(Actions.Configuration.setJournals_size(e)) },
        setJournals_operator: (e) => { dispatch(Actions.Configuration.setJournals_operator(e.target.checked)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journals);