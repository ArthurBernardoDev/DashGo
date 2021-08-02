import { Box, Divider, Flex, Heading, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from 'next/link'
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
})


export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const { errors } = formState


    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {

        await new Promise(resolve => setTimeout(resolve, 2000));
    }


    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as='form'
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    onSubmit={handleSubmit(handleCreateUser)}
                    p={["6", "8"]} >
                    <Heading size="lg" fw="normal">Criar Usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="name"
                                label="Nome Completo"
                                error={errors.name}
                                {...register('name')}
                            >

                            </Input>
                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                error={errors.email}
                                {...register('email')}
                            ></Input>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="password"
                                type="password"
                                error={errors.password}
                                label="Senha"
                                {...register('password')}></Input>
                            <Input
                                name="password_confirmation"
                                type="password"
                                error={errors.password_confirmation}
                                label="Confirmação da senha"
                                {...register('password_confirmation')} ></Input>
                        </SimpleGrid>

                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme="pink"
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box >
    );
}