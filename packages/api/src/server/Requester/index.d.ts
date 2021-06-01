enum ContentTypes {
  'application/x-www-form-urlencoded',
  'text/plain',
  'application/json',
  'multipart/form-data',
}

enum Oauth2Type {
  'user',
  'app',
}

enum DataType {
  'json',
  'xml',
  'text',
  'file',
}

interface IRequesterChainable {
  done(callback: (result: any) => void): void;
  fail(callback: (message: string) => void): void;
}

interface IRequestOptions {
  data: any;
  contentType: ContentTypes;
  headers: any;
  username: string;
  password: string;
  preemtiveAuthentication: boolean;
  files: any;
  retry: boolean;
  retryCount: number;
  oauth2: any;
  oauth2Type: Oauth2Type;
  dataType: DataType;
  fallbackCharset: string;
}

declare namespace requester {
  // function delete(aUrl: string): IRequesterChainable;
  // function delete(aUrl: string, options: IRequestOptions): IRequesterChainable;

  function get(aUrl: string): IRequesterChainable;
  function get(aUrl: string, options: IRequestOptions): IRequesterChainable;

  function head(aUrl: string): IRequesterChainable;
  function head(aUrl: string, options: IRequestOptions): IRequesterChainable;

  function patch(aUrl: string): IRequesterChainable;
  function patch(aUrl: string, options: IRequestOptions): IRequesterChainable;

  function post(aUrl: string): IRequesterChainable;
  function post(aUrl: string, options: IRequestOptions): IRequesterChainable;

  function put(aUrl: string): IRequesterChainable;
  function put(aUrl: string, options: IRequestOptions): IRequesterChainable;
}

export default requester;
