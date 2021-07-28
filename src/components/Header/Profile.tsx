import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Arthur Bernardo</Text>
                <Text color="gray.300" fontSize="small">Contato.arthurbernardoas@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Arthur Bernardo" src="https://github.com/ArthurBernardoDev.png" />
        </Flex>
    );
}