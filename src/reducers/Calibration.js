import * as constants from "../constants"

export function reducer(state = constants.Defaults.STATE.calibration, action) {
    switch (action.type) {
        case constants.Actions.SET_CALIBRATION_KX:
            var newState = {
                kx: action.payload,
                sx: state.sx
            }
            return newState
        case constants.Actions.SET_CALIBRATION_SX:
            var newState = {
                kx: state.sx,
                sx: action.payload
            }
            return newState
        default:
            return state
    }
}

export function getKx(state) {
    return state.Calibration.kx;
}

export function getSx(state) {
    return state.Calibration.sx;
}