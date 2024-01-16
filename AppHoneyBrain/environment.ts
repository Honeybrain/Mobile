import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

const BACKEND_URL: string = "http://192.168.1.80:8080";

const transport = new GrpcWebFetchTransport({
  baseUrl: BACKEND_URL,
});

export {
  BACKEND_URL,
  transport
};
