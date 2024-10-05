const users = [
  {
    name: 'Jonas',
    id: 23,
    email: 'JaycePain',
  },
  {
    name: 'Cleber',
    id: 24,
    email: 'Cleber',
  },
];
const user = {
  name: 'Jonas',
  id: 23,
  email: 'JaycePain',
};
export const userResolver = {
  Query: {
    Users: (): Array<{ name: string; id: number; email: string }> => {
      return users;
    },
    User: (): { name: string; id: number; email: string } => {
      return user;
    },
  },
};
