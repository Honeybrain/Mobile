import React from "react";
import { UserClient } from '../protos/user.client';
import { GetHistoryRequest } from '../protos/user';
import { transport } from "../environment";

const useGetHistoryRPC = () => {
  const client = React.useMemo(() => new UserClient(transport), []);

  const getHistory = React.useCallback(async () => {
    const request = GetHistoryRequest.create();
    const { response } = await client.getHistory(request, {});
    return response.entries;
  }, [client]);

  return {
    getHistory,
  };
};

export default useGetHistoryRPC;