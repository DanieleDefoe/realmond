import { Theme } from '@/features/Theme';
import { SearchForm } from '@/widgets/SearchForm';
import { UsersList } from '@/widgets/UsersList';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container p={20} maxW="100%" minHeight="100dvh">
      <Heading as="h1" textAlign="center">
        Welcome to Users List
      </Heading>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        align="center"
      >
        Developed by Abuzar
      </Text>

      <Box mt={5}>
        <SearchForm />
      </Box>

      <Box mt={10} justifyContent="center" display="flex" w="100%">
        <UsersList />
      </Box>

      <Box position="fixed" top={30} right={30}>
        <Theme />
      </Box>
    </Container>
  );
};
