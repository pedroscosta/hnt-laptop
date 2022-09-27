import { createContext, ReactNode, useState } from 'react'
import apps, { Apps } from '../apps/config'
import { App } from '../types'

interface DesktopContextType {
    openApps: Apps
    openApp: (app: string) => void
    closeApp: (app: string) => void
}

const initialValue = {
    openApps: {},
    openApp: () => {},
    closeApp: () => {},
}

const DesktopContext = createContext<DesktopContextType>(initialValue)

export const DesktopContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [openApps, setOpenApps] = useState<{ [index: string]: App }>(
        initialValue.openApps
    )

    const openApp = (app: string) => {
        setOpenApps((prev) => ({ ...prev, [app]: apps[app] }))
    }

    const closeApp = (app: string) => {
        setOpenApps((prev) => {
            const copy = { ...prev }
            delete copy[app]
            return copy
        })
    }

    return (
        <DesktopContext.Provider value={{ openApps, openApp, closeApp }}>
            {children}
        </DesktopContext.Provider>
    )
}

export default DesktopContext
