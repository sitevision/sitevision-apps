import { Cookie, Request } from '../../common/router';

export interface HooksResponse {
  set(name: string, value: string): void;
  cookie(cookie: Cookie): void;
  clearCookie(name: string);
  redirect(url: string);
}

export interface Hooks {
  beforeRender(callback: (req: Request, res: HooksResponse) => void): void;

  getPageTitle(callback: (req: Request) => string);
  addHeadElement(callback: (req: Request) => string);
}

declare namespace Hooks {}

declare var hooks: Hooks;

export default hooks;
