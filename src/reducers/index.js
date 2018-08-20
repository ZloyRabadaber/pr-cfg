import { combineReducers } from 'redux'
import * as Destination from './Destination'
import * as Configuration from './Configuration'
import * as Calibration from './Calibration'
import * as SystemAPI from './SystemAPI'
import * as App from './App'

export default combineReducers(
    {
        Destination: Destination.reducer,
        Configuration: Configuration.reducer,
        Calibration: Calibration.reducer,
        App: App.reducer,
    })

export { Destination, Configuration, Calibration, SystemAPI, App }