import { routesApiMap, User } from '@/shared/lib';

export const filterUsers = (search: string) => {
  const users = JSON.parse(
    localStorage.getItem(routesApiMap.users) as string
  ) as User[];

  return users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.toLowerCase().includes(search.toLowerCase())
  );
};
