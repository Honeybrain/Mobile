// import React from "react";
// import { transport } from "../environment";
// import { ContainersRequest, Container } from '../protos/containers';
// import { ContainersClient } from "../protos/containers.client";

// const useContainersRPC = () => {
//   const client = React.useMemo(() => new ContainersClient(transport), []);
//   const [containers, setContainers] = React.useState<Container[]>();
//   const controller = new AbortController();

//   const streamContainers = React.useCallback(async () => {
//     const request: ContainersRequest = ContainersRequest.create();

//     const stream = client.streamContainers(request, { abort: controller.signal });
//     stream.responses.onNext((message) => {
//       setContainers(message?.containers);
//       console.log("Nouvelle réponse du stream:", message?.containers);
//     });
//   }, []);

//   React.useEffect(() => {
//     streamContainers();

//     return () => {
//       controller.abort();
//     }
//   }, []);

//   return {
//     containers,
//   };
// };

// export default useContainersRPC;




import React from "react";
import { transport } from "../environment";
import { ContainersRequest, Container } from '../protos/containers';
import { ContainersClient } from "../protos/containers.client";

const useContainersRPC = () => {
  const client = React.useMemo(() => new ContainersClient(transport), []);
  const [containers, setContainers] = React.useState<Container[] | null>(null);

  const fetchContainers = React.useCallback(async () => {
    console.log("Début de fetchContainers"); // Log pour débogage
    const request: ContainersRequest = ContainersRequest.create();

    try {
      console.log("Tentative de création du stream"); // Log pour débogage
      const stream = client.streamContainers(request, {});
      console.log("Stream créé", stream); // Log pour débogage

      stream.responses.onNext((message) => {
        console.log("Réponse du stream reçue:", message); // Log pour débogage
        if (message && message.containers) {
          setContainers(message.containers);
        } else {
          console.log("Réponse du stream vide ou non conforme");
        }
      });

      stream.responses.onError((error) => {
        console.error("Erreur lors du stream de containers:", error);
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des containers:", error);
    }
  }, [client]);

  React.useEffect(() => {
    fetchContainers();
  }, [fetchContainers]);

  return {
    containers,
  };
};

export default useContainersRPC;

