import React from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='menu'>
                <ul className='nav nav-pills flex-column m-1'>
                    <Link className='nav-link p-0 text-dark' to="/home">Обзор</Link>
                    <Link className='nav-link p-0 text-dark' to="/system">Система</Link>
                    <Link className='nav-link p-0 text-dark' to="/db">База данных</Link>
                    <Link className='nav-link p-0 text-dark' to="/di">Дискретные входы</Link>
                    <Link className='nav-link p-0 text-dark' to="/do">Дискретные выходы</Link>
                    <Link className='nav-link p-0 text-dark' to="/adc">Аналоговые входы</Link>
                    <Link className='nav-link p-0 text-dark' to="/dac">Аналоговые выходы</Link>
                    <Link className='nav-link p-0 text-dark' to="/pgbr">Правый слот расширения</Link>
                    <Link className='nav-link p-0 text-dark' to="/pgbl">Левый слот расширения</Link>
                    <Link className='nav-link p-0 text-dark' to="/journals">Журналы</Link>
                    <Link className='nav-link p-0 text-dark' to="/iec104">IEC60870-5-104 слейв</Link>
                    <Link className='nav-link p-0 text-dark' to="/calibai">Калибровка аналоговых входов</Link>
                    <Link className='nav-link p-0 text-dark' to="/about">О программе</Link>
                </ul>
            </div>
        )
    }
}