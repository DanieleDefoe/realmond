import { routesApiMap, User } from '@/shared/lib';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export const useClick = (id: number) => {
  const queryClient = useQueryClient();

  const onClick = useCallback(() => {
    queryClient.setQueryData([routesApiMap.users], (data: User[]): User[] => {
      return data.map((user) => {
        if (user.id !== id) return user;
        return { ...user, isSelected: !user.isSelected };
      });
    });
  }, [queryClient, id]);

  return onClick;
};
