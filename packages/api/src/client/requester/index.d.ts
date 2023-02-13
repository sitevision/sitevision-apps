export interface RequesterOptions extends Record<string, any> {
  url: string;
  data?: any;
  fileUpload?: boolean;
}

export interface Requester {
  doGet(options: RequesterOptions): Promise<unknown>;
  doPut(options: RequesterOptions): Promise<unknown>;
  doPost(options: RequesterOptions): Promise<unknown>;
  doDelete(options: RequesterOptions): Promise<unknown>;
}

declare namespace Requester {}

declare var requester: Requester;

export default requester;
