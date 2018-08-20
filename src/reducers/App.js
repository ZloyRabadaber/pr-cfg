import * as constants from "../constants"

export function reducer(state = constants.Defaults.STATE.app, action) {    
    switch (action.type) {
    case constants.Actions.SET_APP_UI: {
        return { ...state, ui: action.payload }
    }
    case constants.Actions.SET_APP_PGB_RIGHT: {
        return { ...state, ui: { ...state.ui, pgb_right: action.payload } }
    }
    case constants.Actions.SET_APP_PGB_LEFT: {
        return { ...state, ui: { ...state.ui, pgb_left: action.payload } }
    }
    case constants.Actions.SET_APP_PGB_EXT: {
        return { ...state, ui: { ...state.ui, pgb_ext: action.payload } }
    }
        default:
            return state
    }
}

export function getUi(state) {
    return state.App.ui;
}
