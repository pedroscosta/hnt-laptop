import React from 'react'
import './index.css'
import App from './components/App'
import { VisibilityProvider } from './providers/VisibilityProvider'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

const root = createRoot(document.getElementById('root')!)

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <VisibilityProvider>
                <App />
            </VisibilityProvider>
        </ChakraProvider>
    </React.StrictMode>
)
