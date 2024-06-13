import {
    Drawer, DrawerBody,
    DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Button, useDisclosure
} from "@chakra-ui/react"
import {MenuItems} from "./"

function Menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}><span className="material-symbols-outlined text-3xl">menu</span></Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>SM</DrawerHeader>
                    <DrawerBody>
                        <MenuItems/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Menu