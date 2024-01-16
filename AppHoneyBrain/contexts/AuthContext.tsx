import React, { createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSignInRPC from '../hooks/useSignInRPC'; // Import the custom hook for sign-in

interface AuthContextProps {
  isLoggedIn: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  rights: boolean | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  token: null,
  setToken: () => {},
  rights: null,
  login: (email: string, password: string) => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const { signIn } = useSignInRPC(); // Initialize the signIn function from the useSignInRPC hook

  useEffect(() => {
    // Charger et définir le token depuis AsyncStorage
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      if (storedToken) {
        setToken(storedToken);
      }
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    console.log("Méthode login appelée dans AuthProvider");
    const token = await signIn(email, password);
    setToken(token);
    await AsyncStorage.setItem('token', token);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, token, setToken, rights: null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
