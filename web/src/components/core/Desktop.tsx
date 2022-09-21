import { SimpleGrid, Center, Square, Box, Flex, Text, Icon } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { App } from '../../types'

interface Props {
    children?: ReactNode
    apps: App[]
}

const Desktop = ({ children, apps }: Props) => {
    return (
        <div style={{ flex: '1 1 auto' }}>
            <Box padding={4} w={64}>
                <SimpleGrid columns={3} spacing={4} spacingY={8}>
                    {apps.map((app) => (
                      <Flex flexDirection={'column'} align={'center'}>
                        <Square size={16} bg={app.color} borderRadius="md" shadow={'lg'}>
                            <Center><Icon as={app.icon} boxSize={10} color={app.iconColor ?? 'white'} /></Center>
                        </Square>
                        <Text fontSize='md' align={'center'} wordBreak={'break-all'} color={'white'} textShadow={'2px 2px 4px black'}>{app.name}</Text>                   
                      </Flex>
                    ))}
                </SimpleGrid>
            </Box>
        </div>
    )
}

export default Desktop
