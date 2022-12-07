import Node from '../../hidden/javax/jcr/Node';

export interface Cookie {
  name: string;
  value: string;
  httpOnly? = false;
  secure? = false;
  maxAge? = -1;
  sameSite?: 'Strict' | 'Lax' | 'None' | undefined;
}

export interface Request {
  invalidateSession(): void;
  header(headerName: string): string | null;
  file(fileParameterName: string): Node;
  params: Record<string, string | number>;
  cookies: Record<string, string>;
  xhr: boolean;
  session: any;
  hostname: string;
  protocol: string;
  secure: boolean;
  method: string;
  path: string;
  /**
   * Can be populated in a hooks context and read from a render context
   */
  context: unknown | null;
}

interface Response {
  agnosticRender(html: string, initialData: unknown);
  send(content: string): void;
  json(data: unknown): void;
  set(name: string, value: string): Response;
  type(type: string): Response;
  sendFile(file: Node): void;
  status(status: number): Response;
  redirect(path: string, query?: string, status?: number): void;
  cookie(cookie: Cookie): void;
  clearCookie(name: string, path?: string): void;

  /**
   * This method will render a component with data
   */
  render(route: string, data: unknown): void;
}

/**
 * This method is triggered by a get request to a given route.
 *
 * Note! Server side only
 *
 * @param route The route which will trigger this method
 * @param callback The callback to trigger for the given route
 */
export function get(
  route: string,
  callback: (req: Request, res: Response) => void
): void;
/**
 * This method is triggered by a post request to a given route.
 *
 * Note! Server side only
 *
 * @param route The route which will trigger this method
 * @param callback The callback to trigger for the given route
 */
export function post(
  route: string,
  callback: (req: Request, res: Response) => void
): void;
/**
 * This method is triggered by a put request to a given route.
 *
 * Note! Server side only
 *
 * @param route The route which will trigger this method
 * @param callback The callback to trigger for the given route
 */
export function put(
  route: string,
  callback: (req: Request, res: Response) => void
): void;
declare function _delete(
  route: string,
  callback: (req: Request, res: Response) => void
): void;

export { _delete as delete };

/**
 * Note! Server side only
 *
 * @param callback The callback to trigger
 */
export function use(
  callback: (req: Request, res: Response, next: Function) => void
): void;

export function getUrl(path: string): string;
export function getStandaloneUrl(path: string): string;

/**
 * Note! Client side only
 */
export function on(event: string, callback: () => void, context: any): void;
/**
 * Note! Client side only
 */
export function off(event: string, callback: () => void, context: any): void;

/**
 * Note! Client side only
 */
export function navigate(url: string, options: any): void;

declare namespace router {
  export {
    get,
    post,
    put,
    _delete as delete,
    use,
    getUrl,
    getStandaloneUrl,
    on,
    off,
    navigate,
  };
}

export default router;
