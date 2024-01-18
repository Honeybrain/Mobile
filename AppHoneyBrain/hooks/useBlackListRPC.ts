import React from "react";
import { transport } from "../environment";
import { BlacklistClient } from '../protos/blacklist.client';
import { GetBlackListRequest, PutWhiteListRequest, PutBlackListRequest} from '../protos/blacklist';
import AuthContext from "../contexts/AuthContext";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const useBlackListRPC = () => {
  const client = React.useMemo(() => new BlacklistClient(transport), []);
  const [blacklist, setBlacklist] = React.useState<string[]>([]);
  const { token } = React.useContext(AuthContext);

  const getBlackList = React.useCallback(async () => {
    const request: GetBlackListRequest = GetBlackListRequest.create();
    try {
      const call = await client.getBlackListUnary(request, {
        meta: { Authorization: `Bearer ${token}` },
      });
      const response = call.response;
      if (response && response.ips) {
        setBlacklist(response.ips);
      }
    } catch (error) {
      console.error("Erreur lors de l'appel de getBlackList:", error);
    }
  }, [client, token]); 
  

  React.useEffect(() => {
    getBlackList();
  }, [getBlackList]);

  return {
    blacklist,
    getBlackList,
  };
};

export default useBlackListRPC;
