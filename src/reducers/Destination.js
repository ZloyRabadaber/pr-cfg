import * as constants from "../constants"

export function reducer(state, action) {
    if (state == undefined) {
        if (localStorage.PR_E_CFG_Destination) {
            try {
                state = JSON.parse(localStorage.PR_E_CFG_Destination);
            }
            catch (e) {
                console.log(e.message);
                state = constants.Defaults.STATE.destination;
            }
        }
        else {
            state = constants.Defaults.STATE.destination;
        }
    }
    
    var newState;
    switch (action.type) {
        case constants.Actions.SET_DESTINATION_HOST: {
            newState = {
                ...state,
                host: action.payload
            }
            break;
        }
        case constants.Actions.SET_DESTINATION_USER: {
            newState = {
                ...state,
                user: action.payload
            }
            break;
        }
        case constants.Actions.SET_DESTINATION_PASS: {
            newState = {
                ...state,
                pass: action.payload
            }
            break;
        }
        default: {
            newState = {
                ...state
            }
        }
    }
    localStorage.PR_E_CFG_Destination = JSON.stringify(newState);
    return newState
}

export function getHost(state) {
    return state.Destination.host;
}

export function getUser(state) {
    return state.Destination.user;
}

export function getPass(state) {
    return state.Destination.pass;
}