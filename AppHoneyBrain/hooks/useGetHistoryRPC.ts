// hooks/useGetHistoryRPC.ts
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { UserClient } from '../protos/user.client';
import { GetHistoryRequest, GetHistoryResponse, HistoryEntry } from '../protos/user';
import { transport } from "../environment";
import AuthContext from "../contexts/AuthContext";

const useGetHistoryRPC = () => {
  const client = React.useMemo(() => new UserClient(transport), []);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token } = useContext(AuthContext);

  const getHistory = useCallback(async () => {
    const request: GetHistoryRequest = {}; // Création d'une requête vide si aucun champ supplémentaire n'est nécessaire
    try {
      const metadata = token ? { 'authorization': `Bearer ${token}` } : {};
      const result = await client.getHistory(request, { metadata });
      const response: GetHistoryResponse = result.response; // Extraction de la réponse
      setHistory(response.entries); // Utilisation des entrées d'historique
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [client, token]);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  return {
    history,
    loading,
    error,
    refresh: getHistory,
  };
};

export default useGetHistoryRPC;
