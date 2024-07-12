import { UserCard } from '@/entities/UserCard';
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useUsersQuery } from '../model/users';

export const UsersList = () => {
  const { data: users, isLoading, isError } = useUsersQuery();

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (isError) {
    return <Text fontSize="2xl">Something went wrong</Text>;
  }

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      w="100%"
    >
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
};
