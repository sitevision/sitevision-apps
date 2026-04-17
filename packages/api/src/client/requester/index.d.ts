export interface RequesterOptions extends Record<string, any> {
  url: string;
  data?: any;
  fileUpload?: boolean;
}

export interface Requester {
  doGet<T = unknown>(options: RequesterOptions): Promise<T>;
  doPut<T = unknown>(options: RequesterOptions): Promise<T>;
  doPost<T = unknown>(options: RequesterOptions): Promise<T>;
  doDelete<T = unknown>(options: RequesterOptions): Promise<T>;
}

declare namespace Requester {}

declare var requester: Requester;

export default requester;
