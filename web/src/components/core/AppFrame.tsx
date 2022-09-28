import React, { ReactNode, useContext } from 'react'
import {
    background,
    Box,
    CloseButton,
    Flex,
    IconButton,
    Spacer,
    Text,
} from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import './AppFrame.css'
import DesktopContext from '../../contexts/DesktopContext'

type Props = {
    children?: ReactNode
    appId: string
}

const AppFrame = ({ children, appId }: Props) => {
    const { closeApp } = useContext(DesktopContext)

    return (
        <Box className="app-frame">
            <Flex paddingBottom={1} paddingRight={1}>
                <Spacer />
                {/* <CloseButton size='sm' background={'red.600'} borderRadius={'full'}/> */}
                <IconButton
                    background={'red.600'}
                    borderRadius={'full'}
                    aria-label="Close"
                    colorScheme="red"
                    size="2xs"
                    icon={<MdClose />}
                    onClick={() => {
                        closeApp(appId)
                    }}
                />
            </Flex>
            <div style={{ flex: '1 1 auto' }}>{children}</div>
        </Box>
    )
}

export default AppFrame
