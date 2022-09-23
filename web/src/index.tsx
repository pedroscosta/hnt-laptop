import React from 'react'
import './index.css'
import App from './components/App'
import { VisibilityProvider } from './providers/VisibilityProvider'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
        },
      }),
    },
  });

const root = createRoot(document.getElementById('root')!)

root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <VisibilityProvider>
                <App />
            </VisibilityProvider>
        </ChakraProvider>
    </React.StrictMode>
)
