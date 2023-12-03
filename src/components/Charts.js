import { Button } from '@mui/material'
import React, { useState } from 'react'
import { CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'

const Charts = () => {
    const [charts, setCharts] = useState(["uv", "", ""])
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]
    return (
        <div className='mt-6 h-screen flex justify-center items-center'>
            <ComposedChart data={ data } width={ 800 } height={ 500 }>
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
                { charts[0] && <Line type={ 'monotone' } stroke='#FF0000' dataKey={ `${charts[0]}` } /> }
                { charts[1] && <Line type={ "monotone" } stroke='#228B22' dataKey={ `${charts[1]}` } /> }
                { charts[2] && <Line type={ "monotone" } stroke='#0000FF' dataKey={ `${charts[2]}` } /> }
                <CartesianGrid strokeDasharray={ "3 3" } />
            </ComposedChart>
            <div className='grid grid-cols-1 grid-rows-4 ml-5'>
                <Button color='error' onClick={ () => setCharts(l => ["pv", "", ""]) }>pv</Button>
                <Button color='success' onClick={ () => setCharts(l => ["", "uv", ""]) }>uv</Button>
                <Button color='info' onClick={ () => setCharts(l => ["", "", "amt"]) }>amt</Button>
                <Button color='secondary' onClick={ () => setCharts(l => ["pv", "uv", "amt"]) }>all together</Button>
            </div>
        </div>
    )
}

export default Charts