import * as constants from "../constants"

export function setKx(kx) {
    return {
        type: constants.Actions.SET_CALIBRATION_KX,
        payload: kx
    };
}

export function setSx(sx) {
    return {
        type: constants.Actions.SET_CALIBRATION_SX,
        payload: sx
    };
}