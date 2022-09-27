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
import React, { ReactNode, useContext } from 'react'
import { Apps } from '../../apps/config'
import DesktopContext from '../../contexts/DesktopContext'
import { App } from '../../types'
import AppFrame from './AppFrame'

interface Props {
    children?: ReactNode
    apps: Apps
}

const Desktop = ({ children, apps }: Props) => {
    const { openApp } = useContext(DesktopContext)
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
        </>
    )
}

export default Desktop
