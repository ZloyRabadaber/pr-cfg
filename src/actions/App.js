import * as constants from "../constants"

export function setUi(value) {
    return {
        type: constants.Actions.SET_APP_UI,
        payload: value
    };
}

export function setPgb_right(value) {
    return {
        type: constants.Actions.SET_APP_PGB_RIGHT,
        payload: value
    };
}

export function setPgb_left(value) {
    return {
        type: constants.Actions.SET_APP_PGB_LEFT,
        payload: value
    };
}

export function setPgb_ext(value) {
    return {
        type: constants.Actions.SET_APP_PGB_EXT,
        payload: value
    };
}
