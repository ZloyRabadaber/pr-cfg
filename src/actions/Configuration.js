import * as constants from "../constants"

export function setSystem(system) {
    return {
        type: constants.Actions.SET_CFG_SYSTEM,
        payload: system
    };
}

export function setSystemSleep(value) {
    return {
        type: constants.Actions.SET_CFG_SYSTEM_SLEEP,
        payload: value
    };
}

export function setSystemUser(value) {
    return {
        type: constants.Actions.SET_CFG_SYSTEM_USER,
        payload: value
    };
}

export function setSystemPass(value) {
    return {
        type: constants.Actions.SET_CFG_SYSTEM_PASS,
        payload: value
    };
}

export function setInfo(info) {
    return {
        type: constants.Actions.SET_CFG_INFO,
        payload: info
    };
}

export function setCfg(cfg) {
    return {
        type: constants.Actions.SET_CFG,
        payload: cfg
    };
}

export function setDi(value) {
    return {
        type: constants.Actions.SET_CFG_DI,
        payload: value
    };
}

export function setDiTime(value) {
    return {
        type: constants.Actions.SET_CFG_DI_TIME,
        payload: value
    };
}

export function setDiFilter(value) {
    return {
        type: constants.Actions.SET_CFG_DI_FILTER,
        payload: value
    };
}

export function setDiSample(value) {
    return {
        type: constants.Actions.SET_CFG_DI_SAMPLE,
        payload: value
    };
}

export function setDiWeight(value) {
    return {
        type: constants.Actions.SET_CFG_DI_WEIGHT,
        payload: value
    };
}

export function setDo(value) {
    return {
        type: constants.Actions.SET_CFG_DO,
        payload: value
    };
}

export function setDoTime(value) {
    return {
        type: constants.Actions.SET_CFG_DO_TIME,
        payload: value
    };
}

export function setDoWait(value) {
    return {
        type: constants.Actions.SET_CFG_DO_WAIT,
        payload: value
    };
}

export function setDac(value) {
    return {
        type: constants.Actions.SET_CFG_DAC,
        payload: value
    };
}

export function setDacTime(value) {
    return {
        type: constants.Actions.SET_CFG_DAC_TIME,
        payload: value
    };
}

export function setDacSample(value) {
    return {
        type: constants.Actions.SET_CFG_DAC_SAMPLE,
        payload: value
    };
}

export function setDacHold(value) {
    return {
        type: constants.Actions.SET_CFG_DAC_HOLD,
        payload: value
    };
}

export function setDacRefresh(value) {
    return {
        type: constants.Actions.SET_CFG_DAC_REFRESH,
        payload: value
    };
}

export function setAdc(value) {
    return {
        type: constants.Actions.SET_CFG_ADC,
        payload: value
    };
}

export function setAdcTime(value) {
    return {
        type: constants.Actions.SET_CFG_ADC_TIME,
        payload: value
    };
}

export function setDb(value) {
    return{
        type: constants.Actions.SET_DB,
        payload: value
    }
}
export function setDb_di(value) {
    return{
        type: constants.Actions.SET_DB_DI,
        payload: value
    }
}
export function setDb_dobi(value) {
    return{
        type: constants.Actions.SET_DB_DOBI,
        payload: value
    }
}
export function setDb_doerr(value) {
    return{
        type: constants.Actions.SET_DB_DOERR,
        payload: value
    }
}
export function setDb_mbm485di(value) {
    return{
        type: constants.Actions.SET_DB_MBM485DI,
        payload: value
    }
}
export function setDb_do(value) {
    return{
        type: constants.Actions.SET_DB_DO,
        payload: value
    }
}
export function setDb_mbm485do(value) {
    return{
        type: constants.Actions.SET_DB_MBM485DO,
        payload: value
    }
}
export function setDb_ai(value) {
    return{
        type: constants.Actions.SET_DB_AI,
        payload: value
    }
}
export function setDb_aiext(value) {
    return{
        type: constants.Actions.SET_DB_AIEXT,
        payload: value
    }
}
export function setDb_mbm485ai(value) {
    return{
        type: constants.Actions.SET_DB_MBM485AI,
        payload: value
    }
}
export function setDb_ao(value) {
    return{
        type: constants.Actions.SET_DB_AO,
        payload: value
    }
}
export function setDb_mbm485ao(value) {
    return{
        type: constants.Actions.SET_DB_MBM485AO,
        payload: value
    }
}
export function setDb_scalei(value) {
    return{
        type: constants.Actions.SET_DB_SCALEI,
        payload: value
    }
}
export function setDb_mbm485sci(value) {
    return{
        type: constants.Actions.SET_DB_MBM485SCI,
        payload: value
    }
}
export function setDb_scaleo(value) {
    return{
        type: constants.Actions.SET_DB_SCALEO,
        payload: value
    }
}
export function setDb_mbm485sco(value) {
    return{
        type: constants.Actions.SET_DB_MBM485SCO,
        payload: value
    }
}
export function setDb_dicount(value) {
    return{
        type: constants.Actions.SET_DB_DICOUNT,
        payload: value
    }
}
export function setDb_aicount(value) {
    return{
        type: constants.Actions.SET_DB_AICOUNT,
        payload: value
    }
}
export function setDb_sccount(value) {
    return{
        type: constants.Actions.SET_DB_SCCOUNT,
        payload: value
    }
}
export function setDb_evtfile(value) {
    return{
        type: constants.Actions.SET_DB_EVTFILE,
        payload: value
    }
}

export function setIec104(value) {
    return {
        type: constants.Actions.SET_IEC104,
        payload: value
    }
}
export function setIec104_enable(value) {
    return {
        type: constants.Actions.SET_IEC104_ENABLE,
        payload: value
    }
}
export function setIec104_eth(value) {
    return {
        type: constants.Actions.SET_IEC104_ETH,
        payload: value
    }
}
export function setIec104_port(value) {
    return {
        type: constants.Actions.SET_IEC104_PORT,
        payload: value
    }
}
export function setIec104_ip(value) {
    return {
        type: constants.Actions.SET_IEC104_IP,
        payload: value
    }
}
export function setIec104_asdu(value) {
    return {
        type: constants.Actions.SET_IEC104_ASDU,
        payload: value
    }
}
export function setIec104_maxcon(value) {
    return {
        type: constants.Actions.SET_IEC104_MAXCON,
        payload: value
    }
}
export function setIec104_mess(value) {
    return {
        type: constants.Actions.SET_IEC104_MESS,
        payload: value
    }
}
export function setIec104_t1(value) {
    return {
        type: constants.Actions.SET_IEC104_T1,
        payload: value
    }
}

export function setJournals(value) {
    return {
        type: constants.Actions.SET_JOURNALS,
        payload: value
    }
}
export function setJournals_count(value) {
    return {
        type: constants.Actions.SET_JOURNALS_COUNT,
        payload: value
    }
}
export function setJournals_size(value) {
    return {
        type: constants.Actions.SET_JOURNALS_SIZE,
        payload: value
    }
}
export function setJournals_operator(value) {
    return {
        type: constants.Actions.SET_JOURNALS_OPERATOR,
        payload: value
    }
}
export function setPgbRight(value) {
    return {
        type: constants.Actions.SET_CFG_PGB_RIGHT,
        payload: value
    }
}
export function setPgbRight_type(value) {
    return {
        type: constants.Actions.SET_CFG_PGB_RIGHT_TYPE,
        payload: value
    }
}
export function setPgbLeft(value) {
    return {
        type: constants.Actions.SET_CFG_PGB_LEFT,
        payload: value
    }
}
export function setPgbLeft_type(value) {
    return {
        type: constants.Actions.SET_CFG_PGB_LEFT_TYPE,
        payload: value
    }
}

export function setPgbRight_wiz_ip(value) {
    return {
        type: constants.Actions.SET_PGB_WIZ_IP,
        payload: value
    }
}
export function setPgbRight_wiz_mask(value) {
    return {
        type: constants.Actions.SET_PGB_WIZ_MASK,
        payload: value
    }
}
export function setPgbRight_wiz_gw(value) {
    return {
        type: constants.Actions.SET_PGB_WIZ_GW,
        payload: value
    }
}
export function setPgbRight_wiz_dns1(value) {
    return {
        type: constants.Actions.SET_PGB_WIZ_DNS1,
        payload: value
    }
}
export function setPgbRight_wiz_dns2(value) {
    return {
        type: constants.Actions.SET_PGB_WIZ_DNS2,
        payload: value
    }
}

export function setPgbLeft_telit_mode(value){
    return {
        type: constants.Actions.SET_PGB_TELIT_MODE,
        payload: value
    }
}
export function setPgbLeft_telit_wait_power(value){
    return {
        type: constants.Actions.SET_PGB_TELIT_WAIT_POWER,
        payload: value
    }
}
export function setPgbLeft_telit_ppp_timeout(value){
    return {
        type: constants.Actions.SET_PGB_TELIT_PPP_TIMEOUT,
        payload: value
    }
}
export function setPgbLeft_telit_ppp_apn(value){
    return {
        type: constants.Actions.SET_PGB_TELIT_PPP_APN,
        payload: value
    }
}
export function setPgbLeft_telit_ppp_user(value){
    return {
        type: constants.Actions.SET_PGB_TELIT_PPP_USER,
        payload: value
    }
}
export function setPgbLeft_telit_ppp_pass(value){
    return {
        type: constants.Actions.SET_PGB_TELIT_PPP_PASS,
        payload: value
    }
}
export function setPgbLeft_telit_ppp_sim(value){
    return {
        type: constants.Actions.SET_PGB_TELIT_PPP_SIM,
        payload: value
    }
}

export function setCfg_changed(value) {
    return {
        type: constants.Actions.SET_CFG_CHANGED,
        payload: value
    };
}