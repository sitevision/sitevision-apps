interface IRequesterOptions {
  url: string;
  data: any;
  fileUpload: boolean;
}

declare namespace requester {
  function doGet(options: IRequesterOptions): Promise<any>;
  function doPut(options: IRequesterOptions): Promise<any>;
  function doPost(options: IRequesterOptions): Promise<any>;
  function doDelete(options: IRequesterOptions): Promise<any>;
}

export default requester;
