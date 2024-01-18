import React from "react";
import { transport } from "../environment";
import { LogsClient } from '../protos/logs.client';
import { LogRequest } from '../protos/logs';

const useLogsRPC = () => {
  const client = React.useMemo(() => new LogsClient(transport), []);
  const [logs, setLogs] = React.useState<string>('');
  const controller = new AbortController();

  const getLogs = React.useCallback(async () => {
    const request: LogRequest = LogRequest.create();

    const call = await client.getLogs(request, { abort: controller.signal });

    const response = call.response;
    if (response && response.content)
      setLogs(response.content);
    
  }, []);

  React.useEffect(() => {
    getLogs();

    return () => {
      controller.abort();
    }
  }, []);

  return {
    logs,
  };
};

export default useLogsRPC;
