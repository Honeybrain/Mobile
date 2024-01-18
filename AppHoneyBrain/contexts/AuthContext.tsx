import React, { createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSignInRPC from '../hooks/useSignInRPC'; // Import the custom hook for sign-in
import { ActivateUserResponse, UserDto } from "../protos/user";
import useGetMeRPC from '../hooks/useGetMeRPC';
import { ToastAndroid } from 'react-native';
import { HaveRoles } from '../_utils/function/have-roles';
import { RoleEnum } from "../protos/user";

interface AuthContextProps {
  isLoggedIn: boolean;
  token: string | null;
  user: UserDto | null;
  setToken: (token: string | null) => void;
  rights: boolean | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  token: null,
  user: null,
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
  const { getMe } = useGetMeRPC();
  const [user, setUser] = useState<UserDto | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Charger et définir le token depuis AsyncStorage
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
        getMe(storedToken).then(setUser);
      }
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    console.log("Méthode login appelée dans AuthProvider");
    try {
      const token = await signIn(email, password);
      setToken(token);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', token);
      getMe(token).then(setUser);
      // console.log("\nuser: ", user);
      console.log("\nHave roles? ", HaveRoles(user, [RoleEnum.CAN_READ_SERVICES]));
      return true;
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Mauvais identifiants', ToastAndroid.SHORT);
      return false;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
