import React from "react";
import { transport } from "../environment";
import { ContainersRequest, Container } from '../protos/containers';
import { ContainersClient } from "../protos/containers.client";
import AuthContext from "../contexts/AuthContext";

// const useContainersRPC = () => {
//   const client = React.useMemo(() => new ContainersClient(transport), []);
//   const [containers, setContainers] = React.useState<Container[]>([]);
//   const controller = new AbortController();
//   const { token } = React.useContext(AuthContext);

//   const streamContainers = React.useCallback(async () => {
//     const request: ContainersRequest = ContainersRequest.create();

//     // Déclaration de 'stream' ici
//     const stream = client.streamContainers(request, { abort: controller.signal });
//     stream.responses.onNext((message) => {
//       console.log("Nouvelle réponse du stream:", message);
//       setContainers(message?.containers || []); // Utilisez un tableau vide comme valeur par défaut
//     });
//   }, [client, token]);  // Ajout de 'client' et 'token' comme dépendances

//   React.useEffect(() => {
//     streamContainers();

//     return () => {
//       controller.abort();
//     };
//   }, [streamContainers]);

//   return {
//     containers,
//   };
// };

const useContainersRPC = () => {
  const client = React.useMemo(() => new ContainersClient(transport), []);
  const [containers, setContainers] = React.useState<Container[]>();
  const controller = new AbortController();
  const { token } = React.useContext(AuthContext);

  const streamContainers = React.useCallback(async () => {
    const request: ContainersRequest = ContainersRequest.create();

    const stream = client.streamContainers(request, { abort: controller.signal });
    stream.responses.onNext((message) => {
      setContainers(message?.containers);
      console.log("Nouvelle réponse du stream:", message);
    });
  }, [token]);

  React.useEffect(() => {
    streamContainers();

    return () => {
      controller.abort();
    }
  }, []);

  return {
    containers,
  };
};

export default useContainersRPC;
