import { IRequest } from '../../common/router';

interface IHooksResponse {
  set(name, value): void;
  cookie(cookie): void;
  clearCookie(name: string);
  redirect(url: string);
}

export function beforeRender(
  callback: (req: IRequest, res: IHooksResponse) => void
): void;

export function getPageTitle(callback: (req: IRequest) => string);
export function addHeadElement(callback: (req: IRequest) => string);

declare namespace hooks {
  export { beforeRender, getPageTitle, addHeadElement };
}

export default hooks;
