import React, { useContext, useState } from 'react'
import './App.css'
import { debugData } from '../utils/debugData'
import { fetchNui } from '../utils/fetchNui'
import Desktop from './core/Desktop'
import TaskBar from './core/TaskBar'
import Apps from '../apps/config'
import { Box } from '@chakra-ui/react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import AppFrame from './core/AppFrame'
import DesktopContext, { DesktopContextProvider } from '../contexts/DesktopContext'

// This will set the NUI to visible if we are
// developing in browser
debugData([
    {
        action: 'setVisible',
        data: true,
    },
])

interface ReturnClientDataCompProps {
    data: any
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
    data,
}) => (
    <>
        <h5>Returned Data:</h5>
        <pre>
            <code>{JSON.stringify(data, null)}</code>
        </pre>
    </>
)

interface ReturnData {
    x: number
    y: number
    z: number
}

const App: React.FC = () => {
    const [clientData, setClientData] = useState<ReturnData | null>(null)

    const handleGetClientData = () => {
        fetchNui<ReturnData>('getClientData')
            .then((retData) => {
                console.log('Got return data from client scripts:')
                console.dir(retData)
                setClientData(retData)
            })
            .catch((e) => {
                console.error('Setting mock data due to error', e)
                setClientData({ x: 500, y: 300, z: 200 })
            })
    }

    return (
        <>
            <DesktopContextProvider>
                <div className="nui-wrapper">
                    <div className="laptop-frame">
                        <Box flex={'1 1 auto'} position={'relative'}>
                            <Desktop apps={Apps} />
                        </Box>
                        <TaskBar apps={Apps} />
                    </div>
                </div>
            </DesktopContextProvider>
        </>
    )
}

export default App
