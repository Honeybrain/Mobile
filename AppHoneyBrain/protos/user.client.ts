// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "user.proto" (package "user", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { User } from "./user";
import type { UserLanguageResponse } from "./user";
import type { UserRequest } from "./user";
import type { ChangeLanguageRequest } from "./user";
import type { GetUsersResponse } from "./user";
import type { ChangeRightsRequest } from "./user";
import type { ActivateUserResponse } from "./user";
import type { ActivateUserRequest } from "./user";
import type { InviteUserRequest } from "./user";
import type { EmailRequest } from "./user";
import type { EmptyResponse } from "./user";
import type { PasswordRequest } from "./user";
import type { UserDto } from "./user";
import type { EmptyRequest } from "./user";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { UserResponse } from "./user";
import type { SignInSignUpRequest } from "./user";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The UserService defines the methods that our service exposes
 *
 * @generated from protobuf service user.User
 */
export interface IUserClient {
    /**
     * @generated from protobuf rpc: SignIn(user.SignInSignUpRequest) returns (user.UserResponse);
     */
    signIn(input: SignInSignUpRequest, options?: RpcOptions): UnaryCall<SignInSignUpRequest, UserResponse>;
    /**
     * @generated from protobuf rpc: SignUp(user.SignInSignUpRequest) returns (user.UserResponse);
     */
    signUp(input: SignInSignUpRequest, options?: RpcOptions): UnaryCall<SignInSignUpRequest, UserResponse>;
    /**
     * @generated from protobuf rpc: GetMe(user.EmptyRequest) returns (user.UserDto);
     */
    getMe(input: EmptyRequest, options?: RpcOptions): UnaryCall<EmptyRequest, UserDto>;
    /**
     * @generated from protobuf rpc: ResetPassword(user.PasswordRequest) returns (user.EmptyResponse);
     */
    resetPassword(input: PasswordRequest, options?: RpcOptions): UnaryCall<PasswordRequest, EmptyResponse>;
    /**
     * @generated from protobuf rpc: ChangeEmail(user.EmailRequest) returns (user.EmptyResponse);
     */
    changeEmail(input: EmailRequest, options?: RpcOptions): UnaryCall<EmailRequest, EmptyResponse>;
    /**
     * @generated from protobuf rpc: InviteUser(user.InviteUserRequest) returns (user.UserDto);
     */
    inviteUser(input: InviteUserRequest, options?: RpcOptions): UnaryCall<InviteUserRequest, UserDto>;
    /**
     * @generated from protobuf rpc: ActivateUser(user.ActivateUserRequest) returns (user.ActivateUserResponse);
     */
    activateUser(input: ActivateUserRequest, options?: RpcOptions): UnaryCall<ActivateUserRequest, ActivateUserResponse>;
    /**
     * @generated from protobuf rpc: ChangeRights(user.ChangeRightsRequest) returns (user.UserDto);
     */
    changeRights(input: ChangeRightsRequest, options?: RpcOptions): UnaryCall<ChangeRightsRequest, UserDto>;
    /**
     * @generated from protobuf rpc: GetUsers(user.EmptyRequest) returns (user.GetUsersResponse);
     */
    getUsers(input: EmptyRequest, options?: RpcOptions): UnaryCall<EmptyRequest, GetUsersResponse>;
    /**
     * @generated from protobuf rpc: DeleteUser(user.EmailRequest) returns (user.EmptyResponse);
     */
    deleteUser(input: EmailRequest, options?: RpcOptions): UnaryCall<EmailRequest, EmptyResponse>;
    /**
     * @generated from protobuf rpc: ChangeLanguage(user.ChangeLanguageRequest) returns (user.EmptyResponse);
     */
    changeLanguage(input: ChangeLanguageRequest, options?: RpcOptions): UnaryCall<ChangeLanguageRequest, EmptyResponse>;
    /**
     * @generated from protobuf rpc: GetUserLanguage(user.UserRequest) returns (user.UserLanguageResponse);
     */
    getUserLanguage(input: UserRequest, options?: RpcOptions): UnaryCall<UserRequest, UserLanguageResponse>;
}
/**
 * The UserService defines the methods that our service exposes
 *
 * @generated from protobuf service user.User
 */
export class UserClient implements IUserClient, ServiceInfo {
    typeName = User.typeName;
    methods = User.methods;
    options = User.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: SignIn(user.SignInSignUpRequest) returns (user.UserResponse);
     */
    signIn(input: SignInSignUpRequest, options?: RpcOptions): UnaryCall<SignInSignUpRequest, UserResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SignInSignUpRequest, UserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SignUp(user.SignInSignUpRequest) returns (user.UserResponse);
     */
    signUp(input: SignInSignUpRequest, options?: RpcOptions): UnaryCall<SignInSignUpRequest, UserResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<SignInSignUpRequest, UserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetMe(user.EmptyRequest) returns (user.UserDto);
     */
    getMe(input: EmptyRequest, options?: RpcOptions): UnaryCall<EmptyRequest, UserDto> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<EmptyRequest, UserDto>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ResetPassword(user.PasswordRequest) returns (user.EmptyResponse);
     */
    resetPassword(input: PasswordRequest, options?: RpcOptions): UnaryCall<PasswordRequest, EmptyResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<PasswordRequest, EmptyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChangeEmail(user.EmailRequest) returns (user.EmptyResponse);
     */
    changeEmail(input: EmailRequest, options?: RpcOptions): UnaryCall<EmailRequest, EmptyResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<EmailRequest, EmptyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: InviteUser(user.InviteUserRequest) returns (user.UserDto);
     */
    inviteUser(input: InviteUserRequest, options?: RpcOptions): UnaryCall<InviteUserRequest, UserDto> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<InviteUserRequest, UserDto>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ActivateUser(user.ActivateUserRequest) returns (user.ActivateUserResponse);
     */
    activateUser(input: ActivateUserRequest, options?: RpcOptions): UnaryCall<ActivateUserRequest, ActivateUserResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<ActivateUserRequest, ActivateUserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChangeRights(user.ChangeRightsRequest) returns (user.UserDto);
     */
    changeRights(input: ChangeRightsRequest, options?: RpcOptions): UnaryCall<ChangeRightsRequest, UserDto> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<ChangeRightsRequest, UserDto>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetUsers(user.EmptyRequest) returns (user.GetUsersResponse);
     */
    getUsers(input: EmptyRequest, options?: RpcOptions): UnaryCall<EmptyRequest, GetUsersResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<EmptyRequest, GetUsersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteUser(user.EmailRequest) returns (user.EmptyResponse);
     */
    deleteUser(input: EmailRequest, options?: RpcOptions): UnaryCall<EmailRequest, EmptyResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<EmailRequest, EmptyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChangeLanguage(user.ChangeLanguageRequest) returns (user.EmptyResponse);
     */
    changeLanguage(input: ChangeLanguageRequest, options?: RpcOptions): UnaryCall<ChangeLanguageRequest, EmptyResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<ChangeLanguageRequest, EmptyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetUserLanguage(user.UserRequest) returns (user.UserLanguageResponse);
     */
    getUserLanguage(input: UserRequest, options?: RpcOptions): UnaryCall<UserRequest, UserLanguageResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<UserRequest, UserLanguageResponse>("unary", this._transport, method, opt, input);
    }
}
