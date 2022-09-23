import React, { ReactNode } from 'react'
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
import { useNavigate } from "react-router-dom";

import './AppFrame.css'

type Props = {
    children?: ReactNode
}

const AppFrame = ({ children }: Props) => {
    const navigate = useNavigate();
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
                    onClick={() => navigate('/')}
                />
            </Flex>
            <div style={{ flex: '1 1 auto'}}>
                {children}
            </div>
        </Box>
    )
}

export default AppFrame
