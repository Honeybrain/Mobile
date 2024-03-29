// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "containers.proto" (package "containers", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message containers.ContainersRequest
 */
export interface ContainersRequest {
}
/**
 * @generated from protobuf message containers.Container
 */
export interface Container {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string status = 2;
     */
    status: string;
    /**
     * @generated from protobuf field: string ip = 3;
     */
    ip: string;
}
/**
 * @generated from protobuf message containers.ContainersReply
 */
export interface ContainersReply {
    /**
     * @generated from protobuf field: repeated containers.Container containers = 1;
     */
    containers: Container[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ContainersRequest$Type extends MessageType<ContainersRequest> {
    constructor() {
        super("containers.ContainersRequest", []);
    }
    create(value?: PartialMessage<ContainersRequest>): ContainersRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ContainersRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContainersRequest): ContainersRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ContainersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message containers.ContainersRequest
 */
export const ContainersRequest = new ContainersRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Container$Type extends MessageType<Container> {
    constructor() {
        super("containers.Container", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "status", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ip", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Container>): Container {
        const message = { name: "", status: "", ip: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Container>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Container): Container {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string status */ 2:
                    message.status = reader.string();
                    break;
                case /* string ip */ 3:
                    message.ip = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Container, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string status = 2; */
        if (message.status !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.status);
        /* string ip = 3; */
        if (message.ip !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.ip);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message containers.Container
 */
export const Container = new Container$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContainersReply$Type extends MessageType<ContainersReply> {
    constructor() {
        super("containers.ContainersReply", [
            { no: 1, name: "containers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Container }
        ]);
    }
    create(value?: PartialMessage<ContainersReply>): ContainersReply {
        const message = { containers: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ContainersReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContainersReply): ContainersReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated containers.Container containers */ 1:
                    message.containers.push(Container.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ContainersReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated containers.Container containers = 1; */
        for (let i = 0; i < message.containers.length; i++)
            Container.internalBinaryWrite(message.containers[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message containers.ContainersReply
 */
export const ContainersReply = new ContainersReply$Type();
/**
 * @generated ServiceType for protobuf service containers.Containers
 */
export const Containers = new ServiceType("containers.Containers", [
    { name: "StreamContainers", serverStreaming: true, options: {}, I: ContainersRequest, O: ContainersReply },
    { name: "GetContainers", options: {}, I: ContainersRequest, O: ContainersReply }
]);
