interface RequesterOptions extends Record<string, any> {
  url: string;
  data?: any;
  fileUpload?: boolean;
}

export function doGet(options: RequesterOptions): Promise<unknown>;
export function doPut(options: RequesterOptions): Promise<unknown>;
export function doPost(options: RequesterOptions): Promise<unknown>;
export function doDelete(options: RequesterOptions): Promise<unknown>;

declare namespace requester {
  export { doGet, doPut, doPost, doDelete };
}

export default requester;
