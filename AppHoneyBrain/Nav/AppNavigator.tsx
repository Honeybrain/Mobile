import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './navigationTypes';
import WelcomeScreen from '../src/WelcomeScreen';
import LoginScreen from '../src/LoginScreen';
import HomeScreen from '../src/HomeScreen';
import Loading from '../src/Loading';
import SettingsScreen from '../src/SettingsScreen';
import IpScreen from '../src/IpScreen';
import ContainerScreen from '../src/ContainerScreen';
import MainNavigator from './MainNavigator';
import History from '../src/HistoryScreen';
import Notif from '../src/NotifScreen';
import EnteringConnections from '../src/ECSCreen';
import { HaveRoles } from '../_utils/function/have-roles';
import { RoleEnum } from "../protos/user";
import AuthContext from '../contexts/AuthContext';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { user } = React.useContext(AuthContext);

  // Utilisez useMemo pour recalculer les écrans en fonction des rôles de l'utilisateur
  const screens = React.useMemo(() => {
    const commonScreens = [
      { name: "Loading", component: Loading },
      { name: "Welcome", component: WelcomeScreen },
      { name: "Login", component: LoginScreen },
      { name: "Home", component: HomeScreen },
      { name: "Settings", component: SettingsScreen },
      { name: "Main", component: MainNavigator },
      { name: "History", component: History },
      { name: "Notif", component: Notif },
      { name: "EC", component: EnteringConnections },
    ];

    if (HaveRoles(user, [RoleEnum.CAN_READ_IP])) {
      commonScreens.push({ name: "Ip", component: IpScreen });
    }
    if (HaveRoles(user, [RoleEnum.CAN_READ_SERVICES])) {
      commonScreens.push({ name: "Container", component: ContainerScreen });
    }
    return commonScreens;
  }, [user]);

  return (
    <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
      ))}
    </Stack.Navigator>
  );
};
// const { user } = React.useContext(AuthContext);

// const AppNavigator: React.FC = () => (
//   <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Loading" component={Loading} />
//     <Stack.Screen name="Welcome" component={WelcomeScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Settings" component={SettingsScreen} />
//     {HaveRoles(user, [RoleEnum.CAN_READ_IP]) && <Stack.Screen name="Ip" component={IpScreen} /> }
//     <Stack.Screen name="Container" component={ContainerScreen} />
//     <Stack.Screen name="Main" component={MainNavigator} />
//     <Stack.Screen name="History" component={History} />
//     <Stack.Screen name="Notif" component={Notif} />
//     <Stack.Screen name="EC" component={EnteringConnections} />
//   </Stack.Navigator>
  
// );

export default AppNavigator;