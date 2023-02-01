import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Dummy Name',
    email: 'dummy@example.com',
  },
});

UserContext.displayName = 'User Context';

export default UserContext;
