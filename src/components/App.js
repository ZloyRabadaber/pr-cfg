import React from 'react'
import * as Components from '.'
import { Route, Switch } from 'react-router'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Components.Destination />
                </div>
                <div className='row'>
                    <Components.Control />
                </div>
                <div className='row'>
                    <Components.Menu />
                    <div className='ml-5'>
                        <Switch className='card'>
                            <Route exact path="/" render={() => <Components.Home />} />
                            <Route path="/home" render={() => <Components.Home />} />
                            <Route path="/system" render={() => <Components.System />} />
                            <Route path="/db" render={() => <Components.Db />} />
                            <Route path="/di" render={() => <Components.Di />} />
                            <Route path="/do" render={() => <Components.Do />} />
                            <Route path="/adc" render={() => <Components.Adc />} />
                            <Route path="/dac" render={() => <Components.Dac />} />
                            <Route path="/pgbr" render={() => <Components.PgbRight />} />
                            <Route path="/pgbl" render={() => <Components.PgbLeft />} />
                            <Route path="/journals" render={() => <Components.Journals />} />
                            <Route path="/iec104" render={() => <Components.Iec104 />} />
                            <Route path="/about" render={() => <Components.About />} />
                            <Route path="/calibai" render={() => <Components.CalibrationAI />} />
                        </Switch>
                    </div>
                </div>
            </div >
        )
    }
}
