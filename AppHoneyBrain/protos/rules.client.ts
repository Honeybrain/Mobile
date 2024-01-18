// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "rules.proto" (package "rules", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Rules } from "./rules";
import type { GetRulesReply } from "./rules";
import type { GetRulesRequest } from "./rules";
import type { PutNewFiltersReply } from "./rules";
import type { PutNewFiltersRequest } from "./rules";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { PutNewRulesReply } from "./rules";
import type { PutNewRulesRequest } from "./rules";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service rules.Rules
 */
export interface IRulesClient {
    /**
     * @generated from protobuf rpc: PutNewDetectionRules(rules.PutNewRulesRequest) returns (rules.PutNewRulesReply);
     */
    putNewDetectionRules(input: PutNewRulesRequest, options?: RpcOptions): UnaryCall<PutNewRulesRequest, PutNewRulesReply>;
    /**
     * @generated from protobuf rpc: PutNewDetectionFilters(rules.PutNewFiltersRequest) returns (rules.PutNewFiltersReply);
     */
    putNewDetectionFilters(input: PutNewFiltersRequest, options?: RpcOptions): UnaryCall<PutNewFiltersRequest, PutNewFiltersReply>;
    /**
     * @generated from protobuf rpc: GetDetectionRules(rules.GetRulesRequest) returns (rules.GetRulesReply);
     */
    getDetectionRules(input: GetRulesRequest, options?: RpcOptions): UnaryCall<GetRulesRequest, GetRulesReply>;
}
/**
 * @generated from protobuf service rules.Rules
 */
export class RulesClient implements IRulesClient, ServiceInfo {
    typeName = Rules.typeName;
    methods = Rules.methods;
    options = Rules.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: PutNewDetectionRules(rules.PutNewRulesRequest) returns (rules.PutNewRulesReply);
     */
    putNewDetectionRules(input: PutNewRulesRequest, options?: RpcOptions): UnaryCall<PutNewRulesRequest, PutNewRulesReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<PutNewRulesRequest, PutNewRulesReply>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: PutNewDetectionFilters(rules.PutNewFiltersRequest) returns (rules.PutNewFiltersReply);
     */
    putNewDetectionFilters(input: PutNewFiltersRequest, options?: RpcOptions): UnaryCall<PutNewFiltersRequest, PutNewFiltersReply> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<PutNewFiltersRequest, PutNewFiltersReply>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetDetectionRules(rules.GetRulesRequest) returns (rules.GetRulesReply);
     */
    getDetectionRules(input: GetRulesRequest, options?: RpcOptions): UnaryCall<GetRulesRequest, GetRulesReply> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetRulesRequest, GetRulesReply>("unary", this._transport, method, opt, input);
    }
}
