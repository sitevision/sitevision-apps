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

// function delete(aUrl: string): IRequesterChainable;
// function delete(aUrl: string, options: IRequestOptions): IRequesterChainable;

export function get(aUrl: string): IRequesterChainable;
export function get(
  aUrl: string,
  options: IRequestOptions
): IRequesterChainable;
export function head(aUrl: string): IRequesterChainable;
export function head(
  aUrl: string,
  options: IRequestOptions
): IRequesterChainable;
export function patch(aUrl: string): IRequesterChainable;
export function patch(
  aUrl: string,
  options: IRequestOptions
): IRequesterChainable;
export function post(aUrl: string): IRequesterChainable;
export function post(
  aUrl: string,
  options: IRequestOptions
): IRequesterChainable;
export function put(aUrl: string): IRequesterChainable;
export function put(
  aUrl: string,
  options: IRequestOptions
): IRequesterChainable;

declare namespace requester {
  export { get, head, patch, post, put };
}

export default requester;
