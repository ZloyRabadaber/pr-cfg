export const STATE = {
    destination: {
        host: "192.168.7.1",
        user: "",
        pass: ""
    },
    calibration: {
        kx: [],
        sx: []
    },
    configuration: {
        changed: true,
        info: {
            firmware: '',
            vnar: '',
            uid: '',
            cfgVersion: '',
            cfgTime: '',
            time: ''
        },
        system: {
            sleep: true,
            user: '',
            pass: ''
        },
        di: {
            time: 9500,
            filter: 500,
            sample: 100,
            weight: 80
        },
        do: {
            time: 10000,
            wait: 20
        },
        dac: {
            time: 10000,
            sample: 1023,
            hold: 1023,
            refresh: 255
        },
        adc: {
            time: 10000
        },
        db: {
            di: 1024,
            dobi: 1024 + 16,
            doerr: 1024 + 16 + 16,
            mbm485di: 1024 + 16 + 16 + 16 + 16,
            do: 3072,
            mbm485do: 3072 + 6,
            ai: 2077,
            aiext: 2077 + 4,
            mbm485ai: 2077 + 4 + 8,
            ao: 5120,
            mbm485ao: 5120 + 1,
            scalei: 4096,
            mbm485sci: 4096,
            scaleo: 6000,
            mbm485sco: 6000,
            dicount: 100,
            aicount: 100,
            sccount: 100,
            evtfile: 0
        },
        iec104: {
            enable: true,
            eth: 0,
            port: 2404,
            ip: 0,
            asdu: 4,
            maxcon: 4,
            mess: 250,
            t1: 30000
        },
        journals: {
            count: 10,
            size: 4096,
            operator: true
        },
        pgb_right: {
            type: 1,
            wiz_ip: 0x2D0212AC,
            wiz_mask: 0x0000FFFF,
            wiz_gw: 0x010012AC,
            wiz_dns1: 0x08080808,
            wiz_dns2: 0x01010101
        },
        pgb_left: {
            type: 0,
            telit_mode: 1,
            telit_wait_power: 5000,
            telit_ppp_timeout: 10000,
            telit_ppp_apn: '',
            telit_ppp_user: '',
            telit_ppp_pass: '',
            telit_ppp_sim: 0
        }
    },
    app: {
        ui: {
            pgb_right: null,
            pgb_left: null,
            pgb_ext: null
        }
    }
}
