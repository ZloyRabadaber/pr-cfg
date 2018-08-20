import * as constants from "../constants"

export function setHost(host) {
    return {
        type: constants.Actions.SET_DESTINATION_HOST,
        payload: host
    };
}

export function setUser(user) {
    return {
        type: constants.Actions.SET_DESTINATION_USER,
        payload: user
    };
}

export function setPass(pass) {
    return {
        type: constants.Actions.SET_DESTINATION_PASS,
        payload: pass
    };
}