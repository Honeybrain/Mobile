
import React from "react";
import { transport } from "../environment";
import { LogsClient } from '../protos/logs.client';
import { LogRequest } from '../protos/logs';
import AuthContext from "../contexts/AuthContext";

const useLogsRPC = () => {
  const client = React.useMemo(() => new LogsClient(transport), []);
  const [logs, setLogs] = React.useState<string>();
  const { token } = React.useContext(AuthContext);
  //const controller = new AbortController();

  const getLogs = React.useCallback(async () => {
    const request: LogRequest = LogRequest.create();
    console.log("logs");
    try {
        const call = await client.getLogs(request, {
            meta: { Authorization: `Bearer ${token}` },
        })
    
    const response = call.response;
      console.log("getlogs");
      console.log(response);
      if (response) {
        setLogs(response.content);
        console.log("here: ", logs)
      }
    } catch (error) {
      console.error("Erreur lors de l'appel de getlogs:", error);
    }
  }, [client, token]); // Inclure client et token dans les dépendances


//     const stream = client.streamLogs(request, { abort: controller.signal });

//     stream.responses.onNext((message) => {
//       setLogs(message?.content);
//     });

//   }, []);

  React.useEffect(() => {
    getLogs();
  }, []);
//     return () => {
//       controller.abort();
//     }
//   }, []);

  return {
    logs,
  };
};

export default useLogsRPC;