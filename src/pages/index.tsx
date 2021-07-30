import { Flex, Button, Stack, } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SingInFormData = {
  email: string;
  password: string;
}


export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SingInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input name="email" type="email" label="E-mail" {...register("email")}></Input>

          <Input name="password" type="password" label="Senha" {...register("password")}></Input>

        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
          entrar
        </Button>
      </Flex>
    </Flex>

  )
}
