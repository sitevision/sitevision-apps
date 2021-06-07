import { IRequest } from '../../common/router';

interface IHooksResponse {
  set(name, value): void;
  cookie(cookie): void;
  clearCookie(name: string);
  redirect(url: string);
}

declare namespace hooks {
  function beforeRender(
    callback: (req: IRequest, res: IHooksResponse) => void
  ): void;

  function getPageTitle(callback: (req: IRequest) => string);
  function addHeadElement(callback: (req: IRequest) => string);
}

export default hooks;
