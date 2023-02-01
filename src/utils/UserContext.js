import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Dummy Name',
    email: 'dummy@example.com',
  },
});

export default UserContext;
