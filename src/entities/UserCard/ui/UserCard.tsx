import { User } from '@/shared/lib';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useClick } from '../lib/useClick';

interface UserCardProps {
  user: User;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const onCardClick = useClick(user.id);

  const outline = user.isSelected ? '2px solid lightgreen' : 'none';

  return (
    <Card onClick={onCardClick} sx={{ outline }}>
      <CardHeader display="flex" gap="4" alignItems="center">
        <Avatar name={user.username} />
        <Heading
          size="md"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {user.username}
        </Heading>
      </CardHeader>
      <CardBody>
        <Link href={`mailto:${user.email}`}>{user.email}</Link>
      </CardBody>
      <CardFooter>
        <Link href={`tel:${user.phone}`}>
          <Button>{user.phone}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
