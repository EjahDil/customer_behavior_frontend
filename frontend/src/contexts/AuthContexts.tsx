import { FC, ReactNode, createContext, Dispatch, useReducer, useEffect } from 'react';

interface User {
  access_token: string;
  token_type: string;
}

type AuthState = { user: undefined | User }; //{ user: User | null };

type AuthAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' };

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
  }>({
    state: { user: undefined }, //user: null
    dispatch: () => { },
  });

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
      // return { ...state, user: action.user };
    case 'LOGOUT':
      return { user: undefined };
    default:
      return state;
  }
};

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: undefined });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}') //as User;

    try {
      if (user) {
        dispatch({ type: 'LOGIN', payload: user });
        console.log(user)
      }
    } catch(err) {
      console.log(err)
      throw Error('Something happened!')
    }

    // Refresh token logic
    const refreshToken = async () => {
      try {
        // Replace with your refresh token API endpoint
        const response = await fetch('/api/refresh-token');
        const json = await response.json();
        if (json.user) {
          localStorage.setItem('user', JSON.stringify(json.user));
          dispatch({ type: 'LOGIN', payload: json.user });
        } else {
          localStorage.removeItem('user');
          dispatch({ type: 'LOGOUT' });
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Set an interval to refresh the token periodically
    const intervalId = setInterval(refreshToken, 5 * 60 * 1000); // Refresh every 5 minutes

    return () => clearInterval(intervalId);

  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


