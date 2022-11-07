/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @example {"id":123,"first_name":"Petya","second_name":"Pupkin","display_name":"Petya Pupkin","login":"userLogin","email":"my@email.com","phone":"89223332211","avatar":"/path/to/avatar.jpg"} */
export interface UserResponse {
  /** User id */
  id: number;
  /** First name */
  first_name: string;
  /** Second name */
  second_name: string;
  /** Display name */
  display_name: string;
  /** User login - unique */
  login: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
  /** Avatar */
  avatar: string;
}

export interface SignUpRequest {
  /** First name */
  first_name: string;
  /** Second name */
  second_name: string;
  /** User login - unique */
  login: string;
  /** Email /^\S+@\S+$/ */
  email: string;
  /** Password */
  password: string;
  /** Phone /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ */
  phone: string;
}

export interface SignInRequest {
  /** User login */
  login: string;
  /** Password */
  password: string;
}

export interface SignUpResponse {
  /** Created User ID */
  id: number;
}

export interface CreateChatRequest {
  /** Chat title */
  title: string;
}

export interface UsersRequest {
  users: number[];
  /** Chat id */
  chatId: number;
}

/** @example {"id":123,"title":"my-chat","avatar":"/123/avatar1.jpg","unread_count":15,"last_message":{"user":{"first_name":"Petya","second_name":"Pupkin","avatar":"/path/to/avatar.jpg","email":"my@email.com","login":"userLogin","phone":"8(911)-222-33-22"},"time":"2022-11-02T16:55:02.599Z","content":"this is message content"}} */
export interface ChatsResponse {
  /** Chat id */
  id: number;
  /** Chat title */
  title: string;
  /** Chat avatar */
  avatar: string;
  /** Number of unread messages in chat for current user */
  unread_count: number;
  last_message: {
    /**
     * Message user (sender)
     * @format date-time
     */
    user?: UserResponse;
    /**
     * Message timestamp
     * @format timestamp
     */
    time?: string;
    /** Message content */
    content?: string;
  };
}

export interface ChatDeleteRequest {
  /** Chat id */
  chatId: number;
}

/** @example {"userId":12,"result":{"id":123,"title":"deleted-chat","avatar":"/123/avatar1.jpg"}} */
export interface ChatDeleteResponse {
  /** User id */
  userId: number;
  result: ChatsResponse;
}

export interface ChatArchiveRequest {
  /** Chat id */
  chatId: number;
}

export interface ChatArchiveResponse {
  /** User id */
  userId: number;
  result: ChatsResponse;
}

export interface ChatsMessagesTokenResponse {
  /** Token for web socket server */
  token: string;
}

/** @example {"unread_count":12} */
export interface UnreadCountResponse {
  /** New messages count */
  unread_count: number;
}

export interface LeaderboardNewLeaderRequest {
  /** Leaderboard data object, any type */
  data: object;
  /** Which field is used to sort (if new value of the field more than old, data is stored) */
  ratingFieldName: string;
  /** Your team name. Used to make unique leaderboard for each project. */
  teamName?: string;
}

export interface LeaderboardRequest {
  /** Which field is used to sort */
  ratingFieldName: string;
  /** Used to paginate between pages. If limit is 10, then for the 1st page - cursor=0, for the 2nd page - cursor=10. */
  cursor: number;
  /** Maximum amount of leaders to return */
  limit: number;
}

export interface OauthSignInRequest {
  /** User code from Yandex */
  code: string;
  /** Redirect uri that you are using for oauth */
  redirect_uri: string;
}

export interface ServiceId {
  /** Service id */
  service_id: string;
}

export interface BadRequestError {
  /** Error message */
  reason: string;
}

export interface UserUpdateRequest {
  /** First name */
  first_name: string;
  /** Second name */
  second_name: string;
  /** Display Name */
  display_name: string;
  /** User login - unique */
  login: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
}

export interface UserRequest {
  /** First name */
  first_name: string;
  /** Second name */
  second_name: string;
  /** Display Name */
  display_name: string;
  /** User login - unique */
  login: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
}

export interface FindUserRequest {
  /** User login (beginning of login) */
  login: string;
}

export interface ChangePasswordRequest {
  /** Old password */
  oldPassword: string;
  /** New password */
  newPassword: string;
}

/** @example {"id":123,"user_id":231,"path":"/32543654dsf/434534r3rsddfs_my-file.jpg","filename":"my-file.jpg","content_type":"image/jpeg","content_size":543672,"upload_date":"2022-11-02T16:55:02.599Z"} */
export interface Resource {
  /** Message id */
  id: number;
  /** User id */
  user_id: number;
  /** Server relative file path */
  path: string;
  /** Initial file name */
  filename: string;
  /** File content type (e.g "image/jpeg" for .jpg images) */
  content_type: string;
  /** File size in bytes */
  content_size: number;
  /**
   * Resource uploading time
   * @format date-time
   */
  upload_date: string;
}

/** @example {"id":123,"user_id":231,"chat_id":312,"time":"2022-11-02T16:55:02.599Z","type":"file","content":132,"file":{"id":132,"user_id":231,"path":"/32543654dsf/434534r3rsddfs_my-file.jpg","filename":"my-file.jpg","content_type":"image/jpeg","content_size":543672,"upload_date":"2022-11-02T16:55:02.599Z"}} */
export interface ChatMessage {
  /** Message id */
  id: number;
  /** User id */
  user_id: number;
  /** Chat id */
  chat_id: number;
  /**
   * Message sent time
   * @format date-time
   */
  time: string;
  /** Message type */
  type: "message" | "file";
  /** Message content (message text for messages and resourceId for files) */
  content: string;
  /** File */
  file?: Resource;
}

/** @example {"id":123,"first_name":"petya","second_name":"petrov","display_name":"petya petrov","login":"my-login","email":"my@email.com","phone":"89223332211","avatar":"/path/to/my-file.jpg","role":"admin"} */
export interface ChatUserResponse {
  /** User id */
  id: number;
  /** First name */
  first_name: string;
  /** Second name */
  second_name: string;
  /** Display name */
  display_name: string;
  /** User login - unique */
  login: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
  /** Avatar */
  avatar: string;
  /** User role */
  role: "admin" | "regular";
}

export interface StaticChartRequest {
  /** Number of points in chart (10 / 100 / 1000) */
  chartSize: "small" | "medium" | "large";
}

export interface LiveChartRequest {
  /**
   * Works as a cursor (initial value should be zero, all the next values are taken from the backend response)
   * @format integer
   * @default 0
   */
  next: number;
}

export type ChartSchema = {
  /**
   * X axis (datetime)
   * @format date-time
   */
  x?: string;
  /** @format float */
  y1?: number;
  /** @format float */
  y2?: number;
}[];

export interface StaticChartResponse {
  /** Chart points */
  data?: ChartSchema;
}

export interface LiveChartResponse {
  /**
   * Used as a cursor (pass this value to the next request)
   * @example 5
   */
  next?: number;
  /** Chart points */
  data?: ChartSchema;
}

export interface LiveVideoInfoRequest {
  /**
   * Works as a cursor (iterate + 1 each request)
   * @format integer
   * @default 0
   */
  iteration: number;
}

export interface VideoInfoResponse {
  /**
   * Video size in bytes
   * @format integer
   * @example 4096
   */
  size: number;
}

export interface Sticker {
  /**
   * Sticker id (send to chat with WS)
   * @format integer
   * @example 123
   */
  id?: number;
  /**
   * Url for sticker resource(image)
   * @example "/stickers/2346-dfsg-425-sdfs/14534.gif"
   */
  path?: string;
}

export interface StickerPack {
  /**
   * Sticker pack title
   * @example "pack-title"
   */
  title?: string;
  /**
   * User id that created this pack
   * @format integer
   * @example 123
   */
  user_id?: number;
  stickers?: string[];
}

export interface StickerPacksResponse {
  /** StickerPacks */
  data?: StickerPack[];
}

export interface StickersResponse {
  /** Stickers */
  data?: Sticker[];
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    // this.instance = axios.create({
    //   ...axiosConfig,
    //   baseURL: axiosConfig.baseURL || "http://62.113.98.233:5000/api/v2",
    // });
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "/api/v2",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Swagger
 * @version 1.0.0
 * @baseUrl http://62.113.98.233:5000/api/v2
 *
 * Chats API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name SignupCreate
     * @summary Sign up (create user)
     * @request POST:/auth/signup
     * @response `200` `SignUpResponse` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    signupCreate: (signUpRequest: SignUpRequest, params: RequestParams = {}) =>
      this.request<SignUpResponse, BadRequestError | void>({
        path: `/auth/signup`,
        method: "POST",
        body: signUpRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name SigninCreate
     * @summary Sign in
     * @request POST:/auth/signin
     * @response `200` `void` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    signinCreate: (signInRequest: SignInRequest, params: RequestParams = {}) =>
      this.request<void, BadRequestError | void>({
        path: `/auth/signin`,
        method: "POST",
        body: signInRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UserList
     * @summary Get user info
     * @request GET:/auth/user
     * @response `200` `UserResponse` An array of user info
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    userList: (params: RequestParams = {}) =>
      this.request<UserResponse, BadRequestError | void>({
        path: `/auth/user`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name LogoutCreate
     * @summary Logout
     * @request POST:/auth/logout
     * @response `200` `void` Ok
     * @response `500` `void` Unexpected error
     */
    logoutCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/auth/logout`,
        method: "POST",
        ...params,
      }),
  };
  chats = {
    /**
     * No description
     *
     * @tags Chats
     * @name ChatsList
     * @summary Get chats
     * @request GET:/chats
     * @response `200` `(ChatsResponse)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    chatsList: (
      query?: {
        /** The number of items to skip before starting to collect the result set */
        offset?: number;
        /** The numbers of items to return */
        limit?: number;
        /** Chat's title to filter by */
        title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChatsResponse[], void>({
        path: `/chats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name ChatsCreate
     * @summary Create chat
     * @request POST:/chats
     * @response `200` `void` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    chatsCreate: (createChatRequest: CreateChatRequest, params: RequestParams = {}) =>
      this.request<void, BadRequestError | void>({
        path: `/chats`,
        method: "POST",
        body: createChatRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete works only for admin role.
     *
     * @tags Chats
     * @name ChatsDelete
     * @summary Delete chat by ID
     * @request DELETE:/chats
     * @response `200` `ChatDeleteResponse` Ok
     * @response `400` `void` Bad Request
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `500` `void` Unexpected error
     */
    chatsDelete: (deleteChatRequest: ChatDeleteRequest, params: RequestParams = {}) =>
      this.request<ChatDeleteResponse, void>({
        path: `/chats`,
        method: "DELETE",
        body: deleteChatRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name ArchiveList
     * @summary Get archived chats
     * @request GET:/chats/archive
     * @response `200` `(ChatsResponse)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    archiveList: (
      query?: {
        /** The number of items to skip before starting to collect the result set */
        offset?: number;
        /** The numbers of items to return */
        limit?: number;
        /** Chat's title to filter by */
        title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChatsResponse[], void>({
        path: `/chats/archive`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Archive chat
     *
     * @tags Chats
     * @name ArchiveCreate
     * @summary Archive chat by ID
     * @request POST:/chats/archive
     * @response `200` `ChatArchiveResponse` Ok
     * @response `400` `void` Bad Request
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `500` `void` Unexpected error
     */
    archiveCreate: (archiveChatRequest: ChatArchiveRequest, params: RequestParams = {}) =>
      this.request<ChatArchiveResponse, void>({
        path: `/chats/archive`,
        method: "POST",
        body: archiveChatRequest,
        format: "json",
        ...params,
      }),

    /**
     * @description UnArchive chat
     *
     * @tags Chats
     * @name UnarchiveCreate
     * @summary UnArchive chat by ID
     * @request POST:/chats/unarchive
     * @response `200` `ChatArchiveResponse` Ok
     * @response `400` `void` Bad Request
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `500` `void` Unexpected error
     */
    unarchiveCreate: (unarchiveChatRequest: ChatArchiveRequest, params: RequestParams = {}) =>
      this.request<ChatArchiveResponse, void>({
        path: `/chats/unarchive`,
        method: "POST",
        body: unarchiveChatRequest,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name CommonDetail
     * @summary Get common chat with current chat user (only works for two users chats)
     * @request GET:/chats/{id}/common
     * @response `200` `(ChatsResponse)[]` Ok
     * @response `400` `void` BadRequest
     * @response `401` `void` Unauthorized
     * @response `404` `void` Not found chat
     * @response `500` `void` Unexpected error
     */
    commonDetail: (id: number, params: RequestParams = {}) =>
      this.request<ChatsResponse[], void>({
        path: `/chats/${id}/common`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name UsersDetail
     * @summary Get chat users
     * @request GET:/chats/{id}/users
     * @response `200` `(ChatUserResponse)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `404` `void` Not found chat
     * @response `500` `void` Unexpected error
     */
    usersDetail: (
      id: number,
      query?: {
        /** The number of items to skip before starting to collect the result set */
        offset?: number;
        /** The numbers of items to return */
        limit?: number;
        /** User's '{first_name} {second_name}' to filter */
        name?: string;
        /** User's email to filter */
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChatUserResponse[], void>({
        path: `/chats/${id}/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name GetChats
     * @summary Get new messages count
     * @request GET:/chats/new/{id}
     * @response `200` `UnreadCountResponse` Ok
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    getChats: (id: number, params: RequestParams = {}) =>
      this.request<UnreadCountResponse, void>({
        path: `/chats/new/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name UsersUpdate
     * @summary Add users to chat
     * @request PUT:/chats/users
     * @response `200` `void` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    usersUpdate: (usersRequest: UsersRequest, params: RequestParams = {}) =>
      this.request<void, BadRequestError | void>({
        path: `/chats/users`,
        method: "PUT",
        body: usersRequest,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chats
     * @name UsersDelete
     * @summary Delete users from chat
     * @request DELETE:/chats/users
     * @response `200` `void` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    usersDelete: (usersRequest: UsersRequest, params: RequestParams = {}) =>
      this.request<void, BadRequestError | void>({
        path: `/chats/users`,
        method: "DELETE",
        body: usersRequest,
        ...params,
      }),

    /**
     * @description Request token to connect to messages server
     *
     * @tags Chats
     * @name TokenCreate
     * @summary Get chat users
     * @request POST:/chats/token/{id}
     * @response `200` `(ChatsMessagesTokenResponse)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    tokenCreate: (id: number, params: RequestParams = {}) =>
      this.request<ChatsMessagesTokenResponse[], void>({
        path: `/chats/token/${id}`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  oauth = {
    /**
     * No description
     *
     * @tags Oauth
     * @name YandexCreate
     * @summary Sign in / sign up with yandex
     * @request POST:/oauth/yandex
     * @response `200` `void` Ok
     * @response `400` `BadRequestError` Bad Request (No such redirect_uri or wrong code)
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    yandexCreate: (OauthSignInRequest: OauthSignInRequest, params: RequestParams = {}) =>
      this.request<void, BadRequestError | void>({
        path: `/oauth/yandex`,
        method: "POST",
        body: OauthSignInRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oauth
     * @name YandexServiceIdList
     * @summary Get service id
     * @request GET:/oauth/yandex/service-id
     * @response `200` `ServiceId` Yandex client id
     * @response `400` `BadRequestError` Bad Request (No such redirect_uri refistered)
     * @response `500` `void` Unexpected error
     */
    yandexServiceIdList: (
      query?: {
        /** Redirect uri that you are using for oauth */
        redirect_uri?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ServiceId, BadRequestError | void>({
        path: `/oauth/yandex/service-id`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags Users
     * @name ProfileUpdate
     * @summary Change user profile
     * @request PUT:/user/profile
     * @response `200` `UserResponse` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    profileUpdate: (userRequest: UserUpdateRequest, params: RequestParams = {}) =>
      this.request<UserResponse, BadRequestError | void>({
        path: `/user/profile`,
        method: "PUT",
        body: userRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfileAvatarUpdate
     * @summary Change user avatar
     * @request PUT:/user/profile/avatar
     * @response `200` `UserResponse` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    profileAvatarUpdate: (
      data: {
        /**
         * Avatar
         * @format binary
         */
        avatar: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserResponse, BadRequestError | void>({
        path: `/user/profile/avatar`,
        method: "PUT",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name PasswordUpdate
     * @summary Change user password
     * @request PUT:/user/password
     * @response `200` `void` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    passwordUpdate: (changePasswordRequest: ChangePasswordRequest, params: RequestParams = {}) =>
      this.request<void, BadRequestError | void>({
        path: `/user/password`,
        method: "PUT",
        body: changePasswordRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserDetail
     * @summary Get user by id
     * @request GET:/user/{id}
     * @response `200` `UserResponse` Ok
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    userDetail: (id: number, params: RequestParams = {}) =>
      this.request<UserResponse, void>({
        path: `/user/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name SearchCreate
     * @summary Search for user by login (max 10)
     * @request POST:/user/search
     * @response `200` `(UserResponse)[]` Ok
     * @response `400` `BadRequestError` Bad Request
     * @response `401` `void` Unauthorized
     * @response `500` `void` Unexpected error
     */
    searchCreate: (findUserRequest: FindUserRequest, params: RequestParams = {}) =>
      this.request<UserResponse[], BadRequestError | void>({
        path: `/user/search`,
        method: "POST",
        body: findUserRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
