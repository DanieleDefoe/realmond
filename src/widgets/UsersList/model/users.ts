import { $api } from '@/shared/api';
import { routesApiMap, User } from '@/shared/lib';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async (limit: number): Promise<User[] | undefined> => {
  try {
    const { data } = await $api.get<User[]>(
      `${routesApiMap.users}?limit=${limit}`
    );
    localStorage.setItem(routesApiMap.users, JSON.stringify(data));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const useUsersQuery = (limit: number = 9) => {
  const result = useQuery({
    queryKey: [routesApiMap.users],
    queryFn: () => fetchUsers(limit),
  });

  return result;
};
