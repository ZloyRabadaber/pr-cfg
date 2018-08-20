import * as constants from "../constants"
import * as Actions from '../actions'

export function reducer(state = constants.Defaults.STATE.configuration, action) {

    if (state == undefined) {
        state = constants.Defaults.STATE.configuration
        return state;
    }

    state = { ...state, changed: true }

    switch (action.type) {
        case constants.Actions.SET_CFG_CHANGED: {
            return { ...state, changed: action.payload }
        }
        case constants.Actions.SET_CFG: {
            return { ...action.payload }
        }
        case constants.Actions.SET_CFG_INFO: {
            return { ...state, info: action.payload }
        }
        case constants.Actions.SET_CFG_SYSTEM: {
            return { ...state, system: action.payload }
        }
        case constants.Actions.SET_CFG_SYSTEM_SLEEP: {
            return { ...state, system: { ...state.system, sleep: action.payload } }
        }
        case constants.Actions.SET_CFG_SYSTEM_USER: {
            return { ...state, system: { ...state.system, user: action.payload } }
        }
        case constants.Actions.SET_CFG_SYSTEM_PASS: {
            return { ...state, system: { ...state.system, pass: action.payload } }
        }
        case constants.Actions.SET_CFG_DI: {
            return { ...state, di: action.payload }
        }
        case constants.Actions.SET_CFG_DI_TIME: {
            return { ...state, di: { ...state.di, time: action.payload } }
        }
        case constants.Actions.SET_CFG_DI_FILTER: {
            return { ...state, di: { ...state.di, filter: action.payload } }
        }
        case constants.Actions.SET_CFG_DI_SAMPLE: {
            return { ...state, di: { ...state.di, sample: action.payload } }
        }
        case constants.Actions.SET_CFG_DI_WEIGHT: {
            return { ...state, di: { ...state.di, weight: action.payload } }
        }
        case constants.Actions.SET_CFG_DO: {
            return { ...state, do: action.payload }
        }
        case constants.Actions.SET_CFG_DO_TIME: {
            return { ...state, do: { ...state.do, time: action.payload } }
        }
        case constants.Actions.SET_CFG_DO_WAIT: {
            return { ...state, do: { ...state.do, wait: action.payload } }
        }
        case constants.Actions.SET_CFG_DAC: {
            return { ...state, dac: action.payload }
        }
        case constants.Actions.SET_CFG_DAC_TIME: {
            return { ...state, dac: { ...state.dac, time: action.payload } }
        }
        case constants.Actions.SET_CFG_DAC_SAMPLE: {
            return { ...state, dac: { ...state.dac, sample: action.payload } }
        }
        case constants.Actions.SET_CFG_DAC_HOLD: {
            return { ...state, dac: { ...state.dac, hold: action.payload } }
        }
        case constants.Actions.SET_CFG_DAC_REFRESH: {
            return { ...state, dac: { ...state.dac, refresh: action.payload } }
        }
        case constants.Actions.SET_CFG_ADC: {
            return { ...state, adc: action.payload }
        }
        case constants.Actions.SET_CFG_ADC_TIME: {
            return { ...state, adc: { ...state.adc, time: action.payload } }
        }
        case constants.Actions.SET_DB: {
            return { ...state, db: action.payload }
        }
        case constants.Actions.SET_DB_DI: {
            return { ...state, db: { ...state.db, di: action.payload } }
        }
        case constants.Actions.SET_DB_DOBI: {
            return { ...state, db: { ...state.db, dobi: action.payload } }
        }
        case constants.Actions.SET_DB_DOERR: {
            return { ...state, db: { ...state.db, doerr: action.payload } }
        }
        case constants.Actions.SET_DB_MBM485DI: {
            return { ...state, db: { ...state.db, mbm485di: action.payload } }
        }
        case constants.Actions.SET_DB_DO: {
            return { ...state, db: { ...state.db, do: action.payload } }
        }
        case constants.Actions.SET_DB_MBM485DO: {
            return { ...state, db: { ...state.db, mbm485do: action.payload } }
        }
        case constants.Actions.SET_DB_AI: {
            return { ...state, db: { ...state.db, ai: action.payload } }
        }
        case constants.Actions.SET_DB_AIEXT: {
            return { ...state, db: { ...state.db, aiext: action.payload } }
        }
        case constants.Actions.SET_DB_MBM485AI: {
            return { ...state, db: { ...state.db, mbm485ai: action.payload } }
        }
        case constants.Actions.SET_DB_AO: {
            return { ...state, db: { ...state.db, ao: action.payload } }
        }
        case constants.Actions.SET_DB_MBM485AO: {
            return { ...state, db: { ...state.db, mbm485ao: action.payload } }
        }
        case constants.Actions.SET_DB_SCALEI: {
            return { ...state, db: { ...state.db, scalei: action.payload } }
        }
        case constants.Actions.SET_DB_MBM485SCI: {
            return { ...state, db: { ...state.db, mbm485sci: action.payload } }
        }
        case constants.Actions.SET_DB_SCALEO: {
            return { ...state, db: { ...state.db, scaleo: action.payload } }
        }
        case constants.Actions.SET_DB_MBM485SCO: {
            return { ...state, db: { ...state.db, mbm485sco: action.payload } }
        }
        case constants.Actions.SET_DB_DICOUNT: {
            return { ...state, db: { ...state.db, dicount: action.payload } }
        }
        case constants.Actions.SET_DB_AICOUNT: {
            return { ...state, db: { ...state.db, aicount: action.payload } }
        }
        case constants.Actions.SET_DB_SCCOUNT: {
            return { ...state, db: { ...state.db, sccount: action.payload } }
        }
        case constants.Actions.SET_DB_EVTFILE: {
            return { ...state, db: { ...state.db, evtfile: action.payload } }
        }
        case constants.Actions.SET_IEC104: {
            return { ...state, iec104: action.payload }
        }
        case constants.Actions.SET_IEC104_ENABLE: {
            return { ...state, iec104: { ...state.iec104, enable: action.payload } }
        }
        case constants.Actions.SET_IEC104_ETH: {
            return { ...state, iec104: { ...state.iec104, eth: action.payload } }
        }
        case constants.Actions.SET_IEC104_PORT: {
            return { ...state, iec104: { ...state.iec104, port: action.payload } }
        }
        case constants.Actions.SET_IEC104_IP: {
            return { ...state, iec104: { ...state.iec104, ip: action.payload } }
        }
        case constants.Actions.SET_IEC104_ASDU: {
            return { ...state, iec104: { ...state.iec104, asdu: action.payload } }
        }
        case constants.Actions.SET_IEC104_MAXCON: {
            return { ...state, iec104: { ...state.iec104, maxcon: action.payload } }
        }
        case constants.Actions.SET_IEC104_MESS: {
            return { ...state, iec104: { ...state.iec104, mess: action.payload } }
        }
        case constants.Actions.SET_IEC104_T1: {
            return { ...state, iec104: { ...state.iec104, t1: action.payload } }
        }
        case constants.Actions.SET_JOURNALS: {
            return { ...state, journals: action.payload }
        }
        case constants.Actions.SET_JOURNALS_COUNT: {
            return { ...state, journals: { ...state.journals, count: action.payload } }
        }
        case constants.Actions.SET_JOURNALS_SIZE: {
            return { ...state, journals: { ...state.journals, size: action.payload } }
        }
        case constants.Actions.SET_JOURNALS_OPERATOR: {
            return { ...state, journals: { ...state.journals, operator: action.payload } }
        }
        case constants.Actions.SET_CFG_PGB_RIGHT: {
            return { ...state, pgb_right: action.payload }
        }
        case constants.Actions.SET_CFG_PGB_RIGHT_TYPE: {
            return { ...state, pgb_right: { ...state.pgb_right, type: action.payload } }
        }
        case constants.Actions.SET_CFG_PGB_LEFT: {
            return { ...state, pgb_left: action.payload }
        }
        case constants.Actions.SET_CFG_PGB_LEFT_TYPE: {
            return { ...state, pgb_left: { ...state.pgb_left, type: action.payload } }
        }
        case constants.Actions.SET_PGB_WIZ_IP: {
            return {...state,pgb_right:{...state.pgb_right, wiz_ip:action.payload}}
        }
        case constants.Actions.SET_PGB_WIZ_MASK: {
            return {...state,pgb_right:{...state.pgb_right, wiz_mask:action.payload}}
        }
        case constants.Actions.SET_PGB_WIZ_GW: {
            return {...state,pgb_right:{...state.pgb_right, wiz_gw:action.payload}}
        }
        case constants.Actions.SET_PGB_WIZ_DNS1: {
            return {...state,pgb_right:{...state.pgb_right, wiz_dns1:action.payload}}
        }
        case constants.Actions.SET_PGB_WIZ_DNS2: {
            return {...state,pgb_right:{...state.pgb_right, wiz_dns2:action.payload}}
        }
        case constants.Actions.SET_PGB_TELIT_MODE: {
            return {...state,pgb_left:{...state.pgb_left, telit_mode:action.payload}}
        }
        case constants.Actions.SET_PGB_TELIT_WAIT_POWER: {
            return {...state,pgb_left:{...state.pgb_left, telit_wait_power:action.payload}}
        }
        case constants.Actions.SET_PGB_TELIT_PPP_TIMEOUT: {
            return {...state,pgb_left:{...state.pgb_left, telit_ppp_timeout:action.payload}}
        }
        case constants.Actions.SET_PGB_TELIT_PPP_APN: {
            return {...state,pgb_left:{...state.pgb_left, telit_ppp_apn:action.payload}}
        }
        case constants.Actions.SET_PGB_TELIT_PPP_USER: {
            return {...state,pgb_left:{...state.pgb_left, telit_ppp_user:action.payload}}
        }
        case constants.Actions.SET_PGB_TELIT_PPP_PASS: {
            return {...state,pgb_left:{...state.pgb_left, telit_ppp_pass:action.payload}}
        }
        case constants.Actions.SET_PGB_TELIT_PPP_SIM: {
            return {...state,pgb_left:{...state.pgb_left, telit_ppp_sim:action.payload}}
        }
        default:
            return state
    }
}

export function getJournals(state) {
    return state.Configuration.journals
}

export function getIec104(state) {
    return state.Configuration.iec104
}

export function getDo(state) {
    return state.Configuration.do
}

export function getDi(state) {
    return state.Configuration.di
}

export function getSystem(state) {
    return state.Configuration.system
}

export function getInfo(state) {
    return state.Configuration.info
}

export function getAll(state) {
    return state.Configuration
}

export function getDac(state) {
    return state.Configuration.dac
}

export function getAdc(state) {
    return state.Configuration.adc
}

export function getDb(state) {
    return state.Configuration.db
}

export function getPgbRight(state) {
    return state.Configuration.pgb_right
}

export function getPgbLeft(state) {
    return state.Configuration.pgb_left
}
