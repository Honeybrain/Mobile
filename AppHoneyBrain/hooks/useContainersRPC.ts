import React from "react";
import { transport } from "../environment";
import { ContainersRequest, Container } from '../protos/containers';
import { ContainersClient } from "../protos/containers.client";
import AuthContext from "../contexts/AuthContext";

const useContainersRPC = () => {
  const client = React.useMemo(() => new ContainersClient(transport), []);
  const [containers, setContainers] = React.useState<Container[]>();
  const { token } = React.useContext(AuthContext);

  const getContainers = React.useCallback(async () => {
    const request: ContainersRequest = ContainersRequest.create();
    try {
      const call = await client.getContainers(request, {
        meta: { Authorization: `Bearer ${token}` },
      });
      const response = call.response;
      if (response && response.containers) {
        setContainers(response.containers);
      }
    } catch (error) {
      console.error("Erreur lors de l'appel de getContainers:", error);
    }
  }, []);

  React.useEffect(() => {
    getContainers();
  }, [getContainers]);
  

  return {
    containers,
    getContainers,
  };
};

export default useContainersRPC;