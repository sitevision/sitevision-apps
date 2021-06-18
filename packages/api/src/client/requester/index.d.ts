interface IRequesterOptions {
  url: string;
  data: any;
  fileUpload: boolean;
}

export function doGet(options: IRequesterOptions): Promise<any>;
export function doPut(options: IRequesterOptions): Promise<any>;
export function doPost(options: IRequesterOptions): Promise<any>;
export function doDelete(options: IRequesterOptions): Promise<any>;

declare namespace requester {
  export { doGet, doPut, doPost, doDelete };
}

export default requester;
