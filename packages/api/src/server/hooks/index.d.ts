import { Cookie, Request } from '../../common/router';

interface HooksResponse {
  set(name: string, value: string): void;
  cookie(cookie: Cookie): void;
  clearCookie(name: string);
  redirect(url: string);
}

export function beforeRender(
  callback: (req: Request, res: HooksResponse) => void
): void;

export function getPageTitle(callback: (req: Request) => string);
export function addHeadElement(callback: (req: Request) => string);

declare namespace hooks {
  export { beforeRender, getPageTitle, addHeadElement };
}

export default hooks;
