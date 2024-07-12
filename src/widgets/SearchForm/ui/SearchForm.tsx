import { useInput } from '@/shared/lib/hooks';
import { routesApiMap } from '@/shared/lib';
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { FormEventHandler } from 'react';
import { filterUsers } from '../lib/helpers';

export const SearchForm = () => {
  const queryClient = useQueryClient();

  const { value: search, onChange } = useInput('');

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    queryClient.setQueryData([routesApiMap.users], () => filterUsers(search));
  };

  return (
    <FormControl as="form" onSubmit={onSubmit} maxW="768" marginInline="auto">
      <InputGroup>
        <Input
          placeholder="Search by name, email, phone"
          value={search}
          onChange={onChange}
          sx={{
            '::placeholder': {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '60%',
            },
          }}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        />
        <InputRightElement w="max-content">
          <Button type="submit">Search</Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
