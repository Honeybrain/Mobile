import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { UserClient } from '../protos/user.client';
import { NightModeRequest } from '../protos/user';
import { transport } from "../environment";
import AuthContext from "../contexts/AuthContext";

const useNightMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const client = new UserClient(transport);

  useEffect(() => {
    const loadInitialMode = async () => {
      const initialMode = await AsyncStorage.getItem('nightMode');
      setIsNightMode(initialMode === 'true');
    };

    loadInitialMode();
  }, []);

  const toggleNightMode = useCallback(async () => {
    const newMode = !isNightMode;
    setIsNightMode(newMode);
    await AsyncStorage.setItem('nightMode', newMode.toString());

    try {
      const request = NightModeRequest.create({ nightMode: newMode });
      await client.nightMode(request, {
        meta: { Authorization: `Bearer ${await AsyncStorage.getItem('token')}` },
      });
    } catch (error) {
      // console.error('Erreur lors de la mise à jour du mode nuit', error);
    }
  }, [isNightMode, client]);

  return { isNightMode, toggleNightMode };
};

export default useNightMode;
