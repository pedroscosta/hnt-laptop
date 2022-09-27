import ExampleApp from './apps/ExampleApp'
import { App } from '../types'
import { FaRegEye } from 'react-icons/fa'

export interface Apps {
    [index: string]: App
}

const apps: Apps = {
    'example-app': {
        name: 'Example',
        icon: FaRegEye,
        color: '#74F2CE',
        iconColor: 'white',
        app: <ExampleApp />,
    },
}

export default apps
