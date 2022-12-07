interface Cache {
  get<A>(key: string, ttl: number, callback: () => A): A;
  purge(key: string): void;
}

export function getCache(): Cache;
export function getSharedCache(aGlobalNamespace: string): Cache;

declare namespace cache {
  export { getCache, getSharedCache };
}

export default cache;
