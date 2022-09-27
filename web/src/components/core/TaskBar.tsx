import React, { useContext } from 'react'
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    Square,
    Icon,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import logo from '../../assets/logo.png'
import { Route, Routes } from 'react-router-dom'
import { Apps } from '../../apps/config'
import DesktopContext from '../../contexts/DesktopContext'

type Props = {
    apps: Apps
}

const TaskBar = ({ apps }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { openApps } = useContext(DesktopContext)

    return (
        <Box bg="gray.900" px={0}>
            <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={2} px={0}>
                        <Button
                            size={'sm'}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <Image w={8} src={logo} />
                        </Button>
                        {Object.entries(openApps).map(([id, app]) => (
                            <Square
                                size={8}
                                bg={app.color}
                                borderRadius="md"
                                shadow={'lg'}
                                style={{ cursor: 'pointer' }}
                            >
                                <Center>
                                    <Icon
                                        as={app.icon}
                                        boxSize={6}
                                        color={app.iconColor ?? 'white'}
                                    />
                                </Center>
                            </Square>
                        ))}
                    </Stack>
                </Flex>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button
                            size={'sm'}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            a
                        </Button>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://avatars.dicebear.com/api/male/username.svg'
                                    }
                                />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={'1xl'}
                                        src={
                                            'https://avatars.dicebear.com/api/male/username.svg'
                                        }
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>Username</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                <MenuItem>Your Servers</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}

export default TaskBar
