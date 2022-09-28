import {
    SimpleGrid,
    Center,
    Square,
    Box,
    Flex,
    Text,
    Icon,
    IconButton,
} from '@chakra-ui/react'
import { Resizable } from 're-resizable'
import React, { ReactNode, useContext } from 'react'
import Draggable from 'react-draggable'
import { Apps } from '../../apps/config'
import DesktopContext from '../../contexts/DesktopContext'
import { App } from '../../types'
import AppFrame from './AppFrame'

interface Props {
    children?: ReactNode
    apps: Apps
}

const Desktop = ({ children, apps }: Props) => {
    const { openApp, openApps } = useContext(DesktopContext)
    return (
        <>
            <div style={{ flex: '1 1 auto' }}>
                <Box padding={4} w={64}>
                    <SimpleGrid columns={3} spacing={4} spacingY={8}>
                        {Object.entries(apps).map(([appId, app]) => (
                            <Flex flexDirection={'column'} align={'center'}>
                                <Square
                                    size={16}
                                    bg={app.color}
                                    borderRadius="md"
                                    shadow={'lg'}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openApp(appId)}
                                >
                                    <Center>
                                        <Icon
                                            as={app.icon}
                                            boxSize={10}
                                            color={app.iconColor ?? 'white'}
                                        />
                                    </Center>
                                </Square>
                                <Text
                                    fontSize="md"
                                    align={'center'}
                                    wordBreak={'break-all'}
                                    color={'white'}
                                    textShadow={'2px 2px 4px black'}
                                >
                                    {app.name}
                                </Text>
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Box>
            </div>
            {Object.entries(openApps).map(([id, app]) => (
                <Draggable bounds="parent">
                    <Resizable
                        defaultSize={{
                            width: '80%',
                            height: '85%',
                        }}
                        bounds="parent"
                        onResizeStart={(e) => {e.stopPropagation()}}
                        enable={{ top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false }}
                        style={{position: 'absolute', left: '10%', top: '7.5%'}}
                    >
                        <AppFrame appId={id}>{app.app}</AppFrame>
                    </Resizable>
                </Draggable>
            ))}
        </>
    )
}

export default Desktop
